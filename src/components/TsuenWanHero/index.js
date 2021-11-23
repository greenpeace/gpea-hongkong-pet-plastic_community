import React from "react";
import Carousel from "react-elastic-carousel";
import "./index.scss";

import Background from "../../assets/images/tsuen-wan/background.svg";

import Logo from "../../assets/images/tsuen-wan/logo_edit.png";

import Slide1 from "../../assets/images/tsuen-wan/slide_001.jpeg";
import Slide2 from "../../assets/images/tsuen-wan/slide_002.jpeg";
import Slide3 from "../../assets/images/tsuen-wan/slide_003.jpeg";
import Slide4 from "../../assets/images/tsuen-wan/slide_004.jpeg";
import Slide5 from "../../assets/images/tsuen-wan/slide_005.jpeg";

import CoverSm from "../../assets/images/hero-video/cover-sm.jpg";
import Mp4 from "../../assets/videos/tsuen-wan/IMG_7761.mp4";
import Webm from "../../assets/videos/tsuen-wan/IMG_7761.webm";

import Video1mp4 from "../../assets/videos/tsuen-wan/FINAL_v2_720(VIU_VERSION).mp4";
import Video1Webm from "../../assets/videos/tsuen-wan/FINAL_v2_720(VIU_VERSION).webm";

import Video2mp4 from "../../assets/videos/tsuen-wan/FINAL_BB_(1920x1080).mp4";
import Video2Webm from "../../assets/videos/tsuen-wan/FINAL_BB_(1920x1080).webm";

export default props => {
  let resetTimeout;
  const { sectionId, devicetype } = props;
  const breakPoints = [{ width: 1, itemsToShow: 1 }];

  const CardData = [
    { id: 1, src: Slide1 },
    { id: 2, src: Slide3 },
    { id: 3, src: Slide4 },
    { id: 4, src: Slide5 },
    { id: 5, src: Slide2 }
  ];

  const carouselRef = React.useRef(null);
  const onNextStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      carouselRef.current.goTo(0);
    }
  };
  const onPrevStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      carouselRef.current.goTo(CardData.length);
    }
  };

  const [isAutoPlay, setAutoPlay] = React.useState(false);

  return (
    <>
      <div
        className="twHeroSectionWrap"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="twHero hero-column">
          <div className="row">
            <div className="">
              <div className="twLogoWrap">
                <img src={Logo} />
                {/* <video muted autoPlay={true} poster={CoverSm} controls={true}>
                  <source src={Mp4} type="video/mp4" />
                  <source src={Webm} type="video/webm" />
                </video> */}
              </div>
              <div className="tw-main-description-wrap">
                <div className="tw-main-description">
                  如果有天，走進社區，講一聲
                  <span>#唔該借借</span>
                  ，立食小店和手搖飲品店都能提供可重用餐具，進食後餐具能在不同回收點歸還，滿足便利和環保的願望。這個願意盒子，你願意一同打開嗎？
                </div>
              </div>
            </div>
            <div className="column cus-column">
              <div className={`carousel-wrapper-tw ${devicetype}`}>
                <Carousel
                  breakPoints={breakPoints}
                  className="carousel-slice"
                  showArrows={true}
                  pagination={true}
                  enableAutoPlay={isAutoPlay}
                  autoPlaySpeed={5000}
                  ref={carouselRef}
                  onPrevStart={onPrevStart}
                  onNextStart={onNextStart}
                  // onNextEnd={({ index }) => {
                  //   clearTimeout(resetTimeout);
                  //   if (index + 1 === CardData.length) {
                  //     resetTimeout = setTimeout(() => {
                  //       carouselRef.current.goTo(0);
                  //     }, 5000);
                  //   }
                  // }}
                  onChange={(currentItem, pageIndex) => {
                    pageIndex === 0 || pageIndex === 6
                      ? setAutoPlay(false)
                      : setAutoPlay(true);
                  }}
                  disableArrowsOnEnd={false}
                >
                  <div className="slice slice-video">
                    <div
                      className="slice-img-frame"
                      style={{
                        backgroundImage: `url(${CoverSm})`,
                        display: "flex"
                      }}
                    >
                      <div style={{ alignSelf: "center" }}>
                        <video
                          muted
                          autoPlay={true}
                          controls={true}
                          onEnded={() => carouselRef.current.goTo(1)}
                        >
                          <source src={Video1mp4} type="video/mp4" />
                          <source src={Video1Webm} type="video/webm" />
                        </video>
                      </div>
                    </div>
                  </div>

                  {CardData.slice(0).map(card => (
                    <div key={card.id} className="slice">
                      <div
                        className="slice-img-frame"
                        style={{ backgroundImage: `url(${card.src})` }}
                      ></div>
                    </div>
                  ))}

                  <div className="slice slice-video">
                    <div
                      className="slice-img-frame"
                      style={{
                        backgroundImage: `url(${CoverSm})`,
                        display: "flex"
                      }}
                    >
                      <div style={{ alignSelf: "center" }}>
                        <video
                          muted
                          autoPlay={true}
                          controls={true}
                          onEnded={() => carouselRef.current.goTo(0)}
                        >
                          <source src={Video2mp4} type="video/mp4" />
                          <source src={Video2Webm} type="video/webm" />
                        </video>
                      </div>
                    </div>
                  </div>
                  {/* <div
                    className="slice slice-video"
                    style={{ background: `url(${CoverSm})` }}
                  >
                    <video
                      muted
                      autoPlay={false}
                      poster={CoverSm}
                      controls={false}
                      onEnded={() => carouselRef.current.goTo(0)}
                    >
                      <source src={Video2mp4} type="video/mp4" />
                      <source src={Video2Webm} type="video/webm" />
                    </video>
                  </div> */}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
