function Floor(props){
    let root = document.documentElement;
    root.style.setProperty('--floorHeight', `${100/props.noOfFloors}%`);
    return (
        <div className="d-flex flex-row" id="floor">
            <div className="d-flex flex-column-reverse" id="floorBox">
                <div className="container" id="baseLine"></div>
                <div className="d-flex flex-column" id="innerFloorBox">
                    {}
                </div>
            </div>
            <div className="d-flex flex-column-reverse" id="floorTitle">
                <p>Floor {props.floorNo}</p>
            </div>
        </div>
    );
}

export default Floor;