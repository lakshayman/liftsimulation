import { useEffect } from 'react';
import Floor from './Floor';
function LiftContainer(){
    var noOfFloors = 20;
    var noOfLifts = 5;
    var floors = [];

    var liftRecord = [];
    var liftMoving = [];

    for(let i = 0; i < noOfLifts; i++){
        liftRecord.push(1);
        liftMoving.push(false);
    }

    useEffect(() => {

    });

    function closestVal(arr, K){
        let res = arr[0];
        let m = 0;
        for(let i = 1; i < arr.length; i++){
            if (Math.abs(K - res) > Math.abs(K - arr[i])){
                res = arr[i];
                m = i;
            }
        }
        return m;
    }

    const downClicked = (floorNo) => {
        const liftid = closestVal(liftRecord, floorNo);
        if(liftRecord[liftid] !== floorNo){
            document.getElementById(`downButton${floorNo}`).disabled = true;
            if(liftMoving[liftid] === true) {
                setTimeout(() => downClicked(floorNo), 100);
            } else {
                liftMoving[liftid] = true;
                let floorDiff = Math.abs(floorNo - liftRecord[liftid]);
                let root = document.documentElement;
                root.style.setProperty('--transitionTime', `${floorDiff*2}s`);
                const lift = document.getElementById(`lift${liftid + 1}`);
                const buttonBox = document.getElementById(`buttonBox${floorNo}`);
                let Diff = (buttonBox.offsetTop + buttonBox.offsetHeight) - (lift.offsetTop + lift.offsetHeight);
                let currentTop = 0
                if(lift.style.top !== ""){
                    currentTop = parseInt(lift.style.top);
                }
                if(currentTop === 0){
                    lift.style.top = `${Diff}px`;
                }else{
                    lift.style.top = `${currentTop + Diff}px`
                }
                setTimeout(() => {
                    liftMoving[liftid]=false;
                    liftRecord[liftid] = floorNo;
                    if(floorNo !== noOfFloors) document.getElementById(`upButton${floorNo}`).disabled = false;
                    if(floorNo !== 1) document.getElementById(`downButton${floorNo}`).disabled = false;
                }, floorDiff*2000);   
            }
        }
    };

    const upClicked = (floorNo) => {
        const liftid = closestVal(liftRecord, floorNo);
        if(liftRecord[liftid] !== floorNo){
            document.getElementById(`upButton${floorNo}`).disabled = true;
            if(liftMoving[liftid] === true) {
                setTimeout(() => upClicked(floorNo), 100);
            } else {
                liftMoving[liftid] = true;
                let floorDiff = Math.abs(floorNo - liftRecord[liftid]);
                let root = document.documentElement;
                root.style.setProperty('--transitionTime', `${floorDiff*2}s`);
                const lift = document.getElementById(`lift${liftid + 1}`);
                const buttonBox = document.getElementById(`buttonBox${floorNo}`);
                let Diff = (buttonBox.offsetTop + buttonBox.offsetHeight) - (lift.offsetTop + lift.offsetHeight);
                let currentTop = 0
                if(lift.style.top !== ""){
                    currentTop = parseInt(lift.style.top);
                }
                if(currentTop === 0){
                    lift.style.top = `${Diff}px`;
                }else{
                    lift.style.top = `${currentTop + Diff}px`
                }
                setTimeout(() => {
                    liftMoving[liftid]=false;
                    liftRecord[liftid] = floorNo;
                    if(floorNo !== noOfFloors) document.getElementById(`upButton${floorNo}`).disabled = false;
                    if(floorNo !== 1) document.getElementById(`downButton${floorNo}`).disabled = false;
                }, floorDiff*2000);   
            }
        }
    };

    for(var i=noOfFloors;i>0;i--){
        floors.push(<Floor downClicked={downClicked} upClicked={upClicked} first={i === 1} last={i === noOfFloors} noOfLifts={noOfLifts} noOfFloors={noOfFloors} key={i} floorNo={i}></Floor>)
    }
    return (
        <div className="LiftContainer d-flex align-items-center justify-content-center">
            <div className="innerLiftContainer d-flex flex-column">
                {floors}
            </div>
        </div>
    );
}

export default LiftContainer;