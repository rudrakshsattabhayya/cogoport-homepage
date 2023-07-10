import "./subscribeUsSection.css";

const SubscribeUsSection = () => {
    return (
        <div className="subscribeUsContainer">
                <div className="subscribeUsImgContainer">
                    <img src="./Subscribe-Us-Section/cogoport-subscribe.webp" alt="subscribe-letter"/>
                </div>
                <div className="subscribeUsTextContainer">
                    <h3>Subscribe to our newsletter now!</h3>
                    <span style={{fontSize: "16px"}}>Don’t miss out on the latest happenings at Cogoport.</span>
                    <div style={{marginTop: "20px"}}>
                        <form style={{display: "flex", marginTop: "0"}}>
                            <div>
                                <input className="subscribeUsSubscriberInput" type="email" placeholder="Enter your email here" required/>
                            </div>
                            <div>
                                <button className="subscribeUsSubscribeBtn" type="submit">Subscribe
                                    <svg xlmns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 14" width="30" height="18" role="img">
                                        <path fillRule="evenodd" d="M7.945 2.518c-.184.085-.362.325-.361.485.001.161.077.246 1.648 1.861.858.882 1.563 1.613 1.567 1.625.005.012-1.855.023-4.503.027l-4.511.006-.086.053c-.124.077-.186.22-.186.425s.062.348.186.425l.086.053 4.511.006c2.648.004 4.508.015 4.503.027-.004.012-.709.743-1.567 1.625-1.076 1.106-1.574 1.634-1.604 1.7a.495.495 0 0 0-.044.166c0 .226.305.525.536.525.115 0 .247-.083.427-.268l1.935-1.988c.972-1 1.798-1.835 1.836-1.858.093-.055.199-.275.199-.413 0-.138-.106-.358-.198-.413-.038-.022-.864-.858-1.836-1.857L8.547 2.741c-.256-.263-.402-.316-.602-.223"></path>
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    )
}

export default SubscribeUsSection;