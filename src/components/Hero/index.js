import React, { useLayoutEffect, useState } from "react";
import Intro from "../../components/Intro";
import ExternalLink from "../common/externalLink";

import CoverSm from "../../assets/images/hero-video/cover-sm.jpg";
import Title from "../../assets/images/hero-video/title.svg";
import BubbleBtn from "../../assets/images/hero-video/bubble-btn.svg";
import BtnPlayVideo from "../../assets/images/btn-play-video.svg";

// import Video from "../../assets/videos/hero_video.mp4";
import Mp4 from "../../assets/videos/74de00be78f23d71a661f5ae523fded1.mp4";
import Webm from "../../assets/videos/5e0fa84e1ed3057f82a6379aa7a7bb58.webm";

import "./index.scss";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    console.log("resized");
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

export default props => {
  const { sectionId, devicetype } = props;
  const [showVideo, setShowVideo] = useState(false);
  const [width, height] = useWindowSize();

  const handleShowVideo = () => {
    setShowVideo(true);
    // scroll to top
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div
        id={sectionId}
        className={`section-hero ${devicetype} ${
          showVideo ? "show-video" : ""
        }`}
      >
        {showVideo || devicetype !== "mobile" ? (
          // always show on tablet and desktop
          // show on mobile after click 播放影片 button
          <div className={`video-container ${devicetype}`}>
            <video muted autoPlay={true} poster={CoverSm} controls={true}>
              {/*<source src={Video} type="video/mp4" />*/}
              <source src={Mp4} type="video/mp4" />
              <source src={Webm} type="video/webm" />
            </video>
            {/* only show this text box on tablet and desktop */}
            {devicetype !== "mobile" && (
              <div className="text-box">
                <img src={Title} className="title" alt="全城走塑" />
                <p>
                  任誰也無法接受一屋垃圾；
                  <br />
                  你又點忍受到「塑膠圍港」？
                  <br />
                  想改變，來齊集這裡行動吧！
                  <br />
                  一個人的力量有限，立即加入，
                  <br />
                  一起為走塑社區使出渾身解數！
                </p>

                <ExternalLink href="https://forms.gle/N5jr5hZxCuq85Vpd6">
                  <img
                    src={BubbleBtn}
                    className="bubble-btn"
                    alt="成為「全城走塑隊員」"
                  />
                </ExternalLink>
              </div>
            )}
          </div>
        ) : (
          // only show on mobile
          <div
            className={`static-container ${devicetype}`}
            style={
              devicetype === "mobile" && !showVideo
                ? {
                    backgroundImage: `url(${CoverSm})`,
                    height: `${height}px`,
                    minHeight: `${height}px`
                  }
                : {}
            }
          >
            <div className="text-box">
              <img src={Title} className="title" alt="全城走塑" />
              <p>
                任誰也無法接受一屋垃圾；
                <br />
                你又點忍受到「塑膠圍港」？
                <br />
                想改變，來齊集這裡行動吧！
                <br />
                一個人的力量有限，立即加入，
                <br />
                一起為走塑社區使出渾身解數！
              </p>

              <ExternalLink href="https://forms.gle/N5jr5hZxCuq85Vpd6">
                <img
                  src={BubbleBtn}
                  className="bubble-btn"
                  alt="成為「全城走塑隊員」"
                />
              </ExternalLink>

              <div className="play-video" onClick={handleShowVideo}>
                <img
                  src={BtnPlayVideo}
                  className="btn-play-video"
                  alt="播放影片"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <Intro devicetype={devicetype} />
    </>
  );
};
