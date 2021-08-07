import Floor from './Floor';
function LiftContainer(){
    var noOfFloors = 4;
    var noOfLifts = 2;
    var floors = []
    for(var i=noOfFloors;i>0;i--){
        floors.push(<Floor first={i === 1} last={i === noOfFloors} noOfLifts={noOfLifts} noOfFloors={noOfFloors} key={i} floorNo={i}></Floor>)
    }
    return (
        <div id="LiftContainer" className="d-flex align-items-center justify-content-center">
            <div id="innerLiftContainer" className="d-flex flex-column">
                {floors}
            </div>
        </div>
    );
}

export default LiftContainer;