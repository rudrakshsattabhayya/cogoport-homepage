import "./industriesServedSection.css";

const IndustriesServedSection = () => {
    return(
        <div className="industriesServedContainer">
                <div className="industriesServedInnerContainer">
                    <h3 className="industriesServedHeading">Industries Served</h3>
                    <div className="industriesServedItemsContainer">
                        <div className="industriesServedItems">
                            <img src="./Industries-Served-Section/1.svg" alt="chemical" />
                            <div>Chemical</div>
                        </div>
                        <div className="industriesServedItems">
                            <img src="./Industries-Served-Section/2.svg" alt="paracetamol" />
                            <div>Paracetamol</div>
                        </div>
                        <div className="industriesServedItems">
                            <img src="./Industries-Served-Section/3.svg" alt="electronics" />
                            <div>Electronics</div>
                        </div>
                        <div className="industriesServedItems">
                            <img src="./Industries-Served-Section/4.svg" style={{width: "84px", marginLeft: "8px"}} alt="whitegoods" />
                            <div>Whitegoods</div>
                        </div>
                        <div className="industriesServedItems">
                            <img src="./Industries-Served-Section/5.svg" style={{width: "88px", marginLeft: "6px"}}  alt="textiles" />
                            <div>Textiles</div>
                        </div>
                        <div className="industriesServedItems">
                            <img src="./Industries-Served-Section/6.svg" alt="manufacturing" />
                            <div>Manufacturing</div>
                        </div>
                        <div className="industriesServedItems">
                            <img src="./Industries-Served-Section/7.svg" alt="agriculture" />
                            <div>Agriculture</div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default IndustriesServedSection;