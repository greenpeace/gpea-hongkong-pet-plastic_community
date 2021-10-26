import React, { useState } from "react";
import CountUp from "react-countup";
import { useLiveFigures } from "../PlasticCommunity/hooks";

import TitleMembers from "../../assets/images/live-figure/title-members.svg";
import TitleShops from "../../assets/images/live-figure/title-shops.svg";
import Background from "../../assets/images/live-figure/background.svg";
import IconMembers from "../../assets/images/live-figure/icon-members.svg";
import IconShops from "../../assets/images/live-figure/icon-shops.svg";
import Circle from "../../assets/images/live-figure/circle.svg";

import "./index.scss";

export default props => {
  const { sectionId, devicetype } = props;
  const [isShowMembers, setIsShowMembers] = useState(true);
  const [members, restaurants] = useLiveFigures();

  // Change title and figures when click different button
  let titleRibbon = { img: null, alt: "" }; // Section title
  let showNum, showUnit; // Figures data
  if (isShowMembers) {
    titleRibbon.img = TitleMembers;
    titleRibbon.alt = "現時走塑隊員人數達到";
    showNum = members;
    showUnit = "名";
  } else {
    titleRibbon.img = TitleShops;
    titleRibbon.alt = "現時走塑商戶達到";
    showNum = restaurants;
    showUnit = "間";
  }

  return (
    <div
      id={sectionId}
      className="section-live-figure"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className={`section-content ${devicetype}`}>
        <div className="title-wrapper">
          <img
            src={titleRibbon.img}
            alt={titleRibbon.alt}
            className={`title-ribbon ${devicetype}`}
          />
        </div>

        <div
          className="figure-container"
          style={{ backgroundImage: `url(${Circle})` }}
        >
          <span className="number">
            {!showNum ? (
              // Loading spinner
              <div className="loading fa-3x">
                <i className="fas fa-spinner fa-spin"></i>
              </div>
            ) : (
              <CountUp start={1} end={showNum} duration="2" />
            )}
          </span>
          <span className="unit">{showUnit}</span>
        </div>

        <div className="button-wrapper">
          <button className="btn" onClick={() => setIsShowMembers(true)}>
            <img src={IconMembers} alt="走塑隊員" />
            <div>走塑隊員</div>
          </button>
          <button className="btn" onClick={() => setIsShowMembers(false)}>
            <img src={IconShops} alt="走塑隊員" />
            <div>走塑商戶</div>
          </button>
        </div>
      </div>
    </div>
  );
};
