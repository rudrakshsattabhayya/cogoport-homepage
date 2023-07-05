import "./topContainer.css";

const TopContainer = () => {
  return (
    <div className="topContainer">
      <div className="topContainerInner">
        <div>
          <h1 className="topContainerHeading">Grow Faster, Go Global.</h1>
          <p className="topContainerPara">
            Strengthen your Supply Chain, and Scale your Business
            <br />
            with Reliable Shipping and Cashflows.
          </p>
          <div className="topContainerTellUsNow">Talk to us now!</div>
          <div className="whatsappInput"></div>
        </div>
        <video
          autoPlay
          muted
          loop
          poster="./Top-Container/women-image"
          className="topContainerWomanImg"
        >
          <source
            src="./Top-Container/background-video.webm"
            type="video/webm"
          />
        </video>
      </div>
    </div>
  );
};

export default TopContainer;
