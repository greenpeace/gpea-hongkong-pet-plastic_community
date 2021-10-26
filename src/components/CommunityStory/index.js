import React from "react";
import { Link } from "react-router-dom";
import TitleRibbon from "../common/titleRibbon";
import Carousel from "react-elastic-carousel";

import Title from "../../assets/images/community-story/title.svg";
import Background from "../../assets/images/community-story/background.svg";
import BtnMore from "../../assets/images/btn-more.svg";

import CardData from "../../pages/CommunityStory/data";

import "./index.scss";

export default props => {
  const { sectionId, devicetype } = props;
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1000, itemsToShow: 3 }
  ];

  return (
    <div
      id={sectionId}
      className="section-community-story"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className={`section-content ${devicetype}`}>
        <TitleRibbon devicetype={devicetype} src={Title} alt="社區故事" />
        {devicetype !== "mobile" ? (
          <p>
            「為環境多走一步，係愛又係責任！」。
            <br />
            成就全城走塑之前，每一位同行者都有著不同守護環境的初衷與故事。
            <br />
            幾位來自不同背景的走塑店主，一同看看他們的走塑歷程是如何煉成的，
            <br />
            或許可以為你帶來一點啟發。
          </p>
        ) : (
          <p>
            「為環境多走一步，係愛又係責任！」。
            <br />
            成就全城走塑之前，每一位同行者都有著不同守護環境的初衷與故事。
            <br />
            幾位來自不同背景的走塑店主，一同看看他們的走塑歷程是如何煉成的，或許可以為你帶來一點啟發。
          </p>
        )}
      </div>

      <div className={`carousel-wrapper ${devicetype}`}>
        <Carousel
          breakPoints={breakPoints}
          className="carousel-slice"
          showArrows={true}
        >
          {CardData.slice(0)
            .reverse()
            .map(card => (
              <div key={card.id} className="slice">
                <div
                  className="slice-img-frame"
                  style={{ backgroundImage: `url(${card.thumbnail})` }}
                >
                  <img src={card.character} className="character" alt="" />
                </div>
                <div className="slice-body">
                  <div className="slice-title">{card.cardTitle}</div>
                  <div className="slice-text">{card.role}</div>
                  <div className="slice-text">{card.shop}</div>
                  <div className="slice-text">{card.post}</div>
                </div>
                <Link
                  to={`/communitystory/${card.id}`}
                  className="slice-button"
                  devicetype={devicetype}
                >
                  <img src={BtnMore} alt="更多" />
                </Link>
                <div className="slice-backdrop"></div>
              </div>
            ))}
        </Carousel>
      </div>
    </div>
  );
};
