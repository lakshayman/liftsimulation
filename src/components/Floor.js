function Floor(props){
    let lifts = []
    for(let i = 1;i<=props.noOfLifts;i++){
        lifts.push(<div id="lift" key={i}></div>);
    }
    let root = document.documentElement;
    root.style.setProperty('--floorHeight', `${100/props.noOfFloors}%`);
    return (
        <div className="d-flex flex-row" id="floor">
            <div className="d-flex flex-column-reverse" id="floorBox">
                <div className="container" id="baseLine"></div>
                <div className="d-flex flex-row justify-content-between" id="innerFloorBox">
                    <div id="buttonBox" className="d-flex flex-column-reverse">
                        {props.first === false && <button className="rounded" id="downButton">Down</button>}
                        {props.last === false && <button className="rounded" id="upButton">Up</button>}
                    </div>
                    {
                        props.first && <div id="lifts" className="d-flex flex-row justify-content-around">
                            {lifts}
                        </div>
                    }
                </div>
            </div>
            <div className="d-flex flex-column-reverse" id="floorTitle">
                <p id="title">Floor {props.floorNo}</p>
            </div>
        </div>
    );
}

export default Floor;