import React, { consts, Button } from "react";
import Carousel from "react-elastic-carousel";
import "./index.scss";

import Background from "../../assets/images/tsuen-wan/background.svg";

import Logo from "../../assets/images/tsuen-wan/logo.png";

import Slide1 from "../../assets/images/tsuen-wan/slide_001.jpeg";
import Slide2 from "../../assets/images/tsuen-wan/slide_002.jpeg";
import Slide3 from "../../assets/images/tsuen-wan/slide_003.jpeg";
import Slide4 from "../../assets/images/tsuen-wan/slide_004.jpeg";
import Slide5 from "../../assets/images/tsuen-wan/slide_005.jpeg";

export default props => {
  const { sectionId, devicetype } = props;
  const breakPoints = [
    { width: 1, itemsToShow: 1 }
    // { width: 550, itemsToShow: 1 },
    // { width: 768, itemsToShow: 2 },
    // { width: 1000, itemsToShow: 3 },
  ];

  const CardData = [
    { id: 1, src: Slide1 },
    { id: 2, src: Slide2 },
    { id: 3, src: Slide3 },
    { id: 4, src: Slide4 },
    { id: 5, src: Slide5 }
  ];

  return (
    <>
      <div
        className="twHeroSectionWrap"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="twHero hero-column">
          <div className="row">
            <div className="column">
              <div className="twLogoWrap">
                <img src={Logo} />
              </div>
              <div className="tw-main-description-wrap">
                <div className="tw-main-description">
                  如果有天，走進社區，講一聲
                  <span>#唔該借借</span>
                  ，立食小店和手搖飲品店都能提供可重用餐具，進食後餐具能在不同回收點歸還，滿足便利和環保的願望。這個願意盒子，你願意一同打開嗎？
                </div>
              </div>
            </div>
            <div className="column">
              <div className={`carousel-wrapper-tw ${devicetype}`}>
                <Carousel
                  breakPoints={breakPoints}
                  className="carousel-slice"
                  showArrows={true}
                  pagination={true}
                  // renderArrow={myArrow}
                >
                  {CardData.slice(0)
                    .reverse()
                    .map(card => (
                      <div key={card.id} className="slice">
                        <div
                          className="slice-img-frame"
                          style={{ backgroundImage: `url(${card.src})` }}
                        >
                          {/* <img
                          src={card.character}
                          className="character"
                          alt=""
                        /> */}
                        </div>
                        <div className="slice-body">
                          <div className="slice-text">試吓講2句</div>
                        </div>
                        <div className="slice-backdrop"></div>
                      </div>
                    ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
