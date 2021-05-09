import React, { useEffect } from "react";
import "./VideoParallax.css";

const VideoParallax = () => {
  const video = (
    <video muted id="video" className="VideoParallax__video">
      <source
        src="https://admin-author-alb-one-prod-1-euw1.wrd-aws.com/content/dam/one/dac/master/dacia-vn/vehicules/duster/hjd-duster/hjd-duster-ph2/reveal/mp4/duster-hjd-ph2-reveal-video-001.mp4.asset.mp4/cf90e244f5.mp4"
        type="video/mp4"
      ></source>
    </video>
  );
  let rootElement = document.getElementById("root");
  useEffect(() => {
    rootElement.addEventListener("scroll", () => {
      console.log("Scrolled");
    });
  }, [rootElement]);

  return <div className="VideoParallax">{video}</div>;
};

export default VideoParallax;
