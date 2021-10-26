import React, { useState } from "react";
import { useDistrictRestaurans } from "./hooks";
import CommunityMap from "./CommunityMap/CommunityMap.js";
import CommunityInfo from "./CommunityInfo/CommunityInfo.js";

import TitleRibbon from "../common/titleRibbon";
import Title from "../../assets/images/plastic-community/title.svg";
import Background from "../../assets/images/plastic-community/background.jpg";

import "./index.scss";

/*
let districtList = [];

  Object.keys(props.districts).forEach(i => {
    districtList.push({ keyValue: i, ...props.districts[i] });
  });
  districtList.sort((a, b) => {
    if (a.region === b.region) {
      return a.numRestaurants > b.numRestaurants ? -1 : 1;
    }
    return a.region > b.region ? 1 : -1; // Hong Kong Island > Kowloon > NT
  });
  */
// Sort disticts by regions and number of restaurants

export default props => {
  const { sectionId, devicetype } = props;
  const [chosenDistrictId, setChosenDistrictId] = useState(null);
  const [districts, restaurants] = useDistrictRestaurans();

  return (
    <div id={sectionId} className="section-plastic-community">
      <div className={`section-content ${devicetype}`}>
        <TitleRibbon devicetype={devicetype} src={Title} alt="走塑地圖" />
        {devicetype !== "mobile" ? (
          <p>
            立即尋找「全城走塑」商戶位置，
            <br />
            再靠您與我們一起擴大版圖。
          </p>
        ) : (
          <p>立即尋找「全城走塑」商戶位置，再靠您與我們一起擴大版圖。</p>
        )}

        <figure className="community-figure">
          <CommunityMap
            chosenDistrictId={chosenDistrictId}
            onChooseDistrictId={districtId => {
              setChosenDistrictId(districtId);
            }}
          />
          <CommunityInfo
            chosenDistrictId={chosenDistrictId}
            districts={districts}
            restaurants={restaurants}
            onChooseDistrictId={districtId => {
              setChosenDistrictId(districtId);
            }}
          />
        </figure>
      </div>

      <div className="footer-bar">
        <img src={Background} alt="" />
      </div>
    </div>
  );
};
