import { useEffect } from 'react';
import Floor from './Floor';
function LiftContainer(){
    var noOfFloors = 4;
    var noOfLifts = 2;
    var floors = [];

    var liftRecord = [];
    var liftMoving = [];

    for(let i = 0; i < noOfLifts; i++){
        liftRecord.push(1);
        liftMoving.push(false);
    }

    useEffect(() => {

    });

    const downClicked = (floorNo) => {
        if(liftRecord[0] !== floorNo){
            document.getElementById(`downButton${floorNo}`).disabled = true;
            if(liftMoving[0] === true) {
                setTimeout(() => downClicked(floorNo), 100);
            } else {
                liftMoving[0] = true;
                let floorDiff = Math.abs(floorNo - liftRecord[0]);
                let root = document.documentElement;
                root.style.setProperty('--transitionTime', `${floorDiff*2}s`);
                const lift = document.getElementById(`lift1`);
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
                    liftMoving[0]=false;
                    liftRecord[0] = floorNo;
                    if(floorNo !== noOfFloors) document.getElementById(`upButton${floorNo}`).disabled = false;
                    if(floorNo !== 1) document.getElementById(`downButton${floorNo}`).disabled = false;
                }, floorDiff*2000);   
            }
        }
    };

    const upClicked = (floorNo) => {
        if(liftRecord[0] !== floorNo){
            document.getElementById(`upButton${floorNo}`).disabled = true;
            if(liftMoving[0] === true) {
                setTimeout(() => upClicked(floorNo), 100);
            } else {
                liftMoving[0] = true;
                let floorDiff = Math.abs(floorNo - liftRecord[0]);
                let root = document.documentElement;
                root.style.setProperty('--transitionTime', `${floorDiff*2}s`);
                const lift = document.getElementById(`lift1`);
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
                    liftMoving[0]=false;
                    liftRecord[0] = floorNo;
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