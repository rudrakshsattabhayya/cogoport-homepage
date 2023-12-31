import "./bottomFooter.css";

const BottomFooter = () => {
    return (
        <div className="bottomFooter">
            <div className="bottomFooterText" style={{display: "flex", alignItems: "center"}}>
                <span className="bottomFooterCopyRight">&#169; 2023 Cogo Universe PTE. All rights reserved.</span>
                <span className="bottomFooterTemp" style={{width: "50px"}}></span>
                <ul className="bottomFooterCopyRight bottomFooterTemp">
                    <a><li style={{marginRight: "5px", cursor: "pointer"}}>Terms and Conditions |</li></a>
                    <a><li style={{marginRight: "5px", cursor: "pointer"}}>Cookie policy |</li></a>
                    <a><li style={{marginRight: "5px", cursor: "pointer"}}>Privacy and Data Protection Policy</li></a>
                </ul>
            </div>
            <div className="bottomFooterIcons">
                <a><svg style={{marginRight: "0px", color: "#000", cursor: "pointer"}} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 14" width="16" height="16" role="img">
                    <path fillRule="evenodd" d="M2.182 1.036a1.426 1.426 0 0 0-.776.443c-.168.18-.243.305-.321.537a1.462 1.462 0 0 0 1.033 1.882c.192.049.487.059.659.021.289-.063.61-.251.804-.471.126-.143.3-.488.337-.667a1.654 1.654 0 0 0-.021-.667 1.448 1.448 0 0 0-1.353-1.101 1.493 1.493 0 0 0-.362.023m7.431 3.758a2.902 2.902 0 0 0-1.109.434c-.21.137-.614.53-.742.722l-.085.128V4.993l-1.184.006-1.185.006-.006 3.996-.005 3.996h2.38v-2.249c0-2.436.001-2.457.128-2.81a1.27 1.27 0 0 1 .337-.543c.395-.397 1.114-.514 1.65-.268.297.136.549.486.665.924l.053.197.007 2.375.008 2.374h2.474l-.009-2.794c-.009-2.757-.009-2.798-.06-3.063-.245-1.29-.954-2.063-2.119-2.31-.302-.064-.915-.083-1.198-.036M1.237 8.995v4.002H3.71V4.993H1.237v4.002"></path>
                </svg></a>
                <a><svg style={{marginRight: "0px", color: "#000", cursor: "pointer"}} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 14" width="16" height="16" role="img">
                    <path fillRule="evenodd" d="M7.303 1.03c-.914.095-1.571.513-1.851 1.177-.166.396-.202.72-.202 1.84v.876H3.99v2.054h1.26v6.02h2.427V6.953h1.678l.012-.075c.007-.042.044-.454.083-.916.039-.462.078-.885.085-.94l.014-.099H7.674l.007-.74c.007-.724.009-.744.062-.853a.337.337 0 0 1 .152-.163c.093-.05.123-.052.873-.06l.775-.007V1.003l-1.02.003c-.562.002-1.111.013-1.22.024"></path>
                </svg></a>
                <a><svg style={{marginRight: "0px", color: "#000", cursor: "pointer"}} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 14" width="16" height="16" role="img">
                    <path fillRule="evenodd" d="M4.484 1.029c-1.112.067-1.88.36-2.465.941a2.69 2.69 0 0 0-.595.818c-.185.377-.296.759-.378 1.307-.046.307-.046 5.48 0 5.787.154 1.028.412 1.589.986 2.146.517.501 1.093.763 1.993.903.321.05.372.051 2.893.053 2.692.001 2.688.001 3.335-.106a3.076 3.076 0 0 0 1.729-.872c.373-.373.601-.75.783-1.294.16-.481.186-.699.209-1.799.028-1.35.027-3.982-.002-4.375a7.581 7.581 0 0 0-.166-1.143 3.046 3.046 0 0 0-.876-1.461c-.557-.53-1.306-.825-2.305-.907-.332-.027-4.683-.026-5.141.002m4.7 1.07c.456.026.913.083 1.151.144a2.061 2.061 0 0 1 1.259 1c.173.325.214.485.275 1.081.079.766.06 5.12-.025 5.604-.08.457-.17.713-.347.985-.361.556-.829.822-1.676.955-.511.081-5.327.059-5.784-.025-.612-.113-.981-.292-1.308-.634-.399-.418-.552-.834-.629-1.712-.031-.356-.03-4.639.001-4.994.033-.383.11-.798.188-1.012.233-.642.84-1.162 1.5-1.286.202-.037.633-.078 1.088-.103.478-.026 3.855-.028 4.307-.003m.756 1.022c-.146.051-.353.263-.404.412a.737.737 0 0 0 .364.906c.142.076.474.076.617 0a.71.71 0 0 0 .326-.328c.056-.114.065-.161.065-.331 0-.16-.01-.217-.053-.297a.727.727 0 0 0-.343-.337.559.559 0 0 0-.304-.064 1 1 0 0 0-.268.039m-3.465.835a3.092 3.092 0 0 0-2.402 2.067 2.948 2.948 0 0 0-.153.98c0 .849.32 1.605.932 2.198.438.425.953.698 1.553.823.291.061.899.061 1.177.001.284-.062.52-.143.76-.26.873-.427 1.471-1.201 1.682-2.183.059-.274.06-.888.001-1.165-.255-1.21-1.122-2.119-2.306-2.418-.203-.051-.305-.062-.649-.069a3.009 3.009 0 0 0-.595.026m.879 1.071a1.993 1.993 0 0 1 1.587 1.501 2.22 2.22 0 0 1-.002.95 2.043 2.043 0 0 1-1.202 1.378 1.69 1.69 0 0 1-.749.135 1.755 1.755 0 0 1-.845-.182 2.008 2.008 0 0 1-.866-2.845c.127-.213.407-.503.625-.646.42-.276.968-.386 1.452-.291"></path>
                </svg></a>
            </div>
        </div>
    )
}

export default BottomFooter;