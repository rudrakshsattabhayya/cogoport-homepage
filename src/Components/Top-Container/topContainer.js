import "./topContainer.css";
import { useEffect, useState } from "react";
const TopContainer = () => {
  let normalSrc = "./Top-Container/background-video.webm";
  let smallSrc = "./Top-Container/background-video-small.webm";
  const [screenWidth, updateScreenWidth] = useState(window.screen.width);

  useEffect(() => {
    const handleResize = () => {
        updateScreenWidth(window.screen.width);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);


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
            src={screenWidth > 768? normalSrc:smallSrc}
            type="video/webm"
          />
        </video>
      </div>
    </div>
  );
};

export default TopContainer;
