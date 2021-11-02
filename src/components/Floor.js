function Floor(props){
    let lifts = []
    for(let i = 1;i<=props.noOfLifts;i++){
        lifts.push(<div id={`lift${i}`} className="lift" key={i}></div>);
    }
    let root = document.documentElement;
    root.style.setProperty('--floorHeight', `200px`);
    return (
        <div className="d-flex flex-row floor">
            <div className="d-flex flex-column-reverse floorBox">
                <div className="container baseLine"></div>
                <div className="d-flex flex-row justify-content-between innerFloorBox">
                    <div id={`buttonBox${props.floorNo}`} className="buttonBox d-flex flex-column-reverse">
                        {props.first === false && <button className="rounded downButton" id={`downButton${props.floorNo}`} onClick={() => setTimeout(props.downClicked(props.floorNo), 0)}>Down</button>}
                        {props.last === false && <button className="rounded upButton" id={`upButton${props.floorNo}`} onClick={() => setTimeout(props.upClicked(props.floorNo), 0)}>Up</button>}
                    </div>
                    {
                        props.first && <div className="d-flex flex-row justify-content-around lifts">
                            {lifts}
                        </div>
                    }
                </div>
            </div>
            <div className="d-flex flex-column-reverse floorTitle">
                <p className="title">Floor {props.floorNo}</p>
            </div>
        </div>
    );
}

export default Floor;