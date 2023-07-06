import "./biggerGetStartedSection.css";

const BiggerGetStartedSection = () => {
    return (
                <div className="biggerGetStartedSection">
                    <div>
                        <h2 className="biggerGetStartedSectionHeading">
                            Get Started Today
                        </h2>
                        <div className="biggerGetStartedSectionDescription">
                        <p>Plan, Book and Finance your shipment in one place.</p>
                            Experience how Cogoport’s Global Trade Platform can Turbocharge your Business.
                        </div>
                        <a>
                            <button className="redBtn" style={{padding: "8px 35px", marginTop: "20px", display: "inline-block", height: "40px"}}>Get Started</button>
                        </a>
                    </div>
                    <div className="biggerGetStartedSectionImgContainer">
                        <img src="./Bigger-Get-Started-Section/image.webp" 
                        style={{width: "280px", height: "360px", objectFit: "contain"}} alt="woman" />
                    </div>
                </div>
    )
}

export default BiggerGetStartedSection;