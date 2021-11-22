import React from "react";
import "./index.scss";

import IconLeft from "../../assets/images/tsuen-wan/PFC_Sticker_blue.png";
import IconRight from "../../assets/images/tsuen-wan/PFC_Sticker_white.png";
import Title from "../../assets/images/tsuen-wan/title_v2.svg";

export default props => {
  return (
    <>
      <div className="topSectionWrap mapSection">
        <div className="twMapTopWrap">
          <div className="titleIcon">
            <img src={IconLeft} />
          </div>
          <div className="twMapTitle">
            <img src={Title} style={{ width: "100%" }} />
          </div>
          <div className="titleIcon">
            <img src={IconRight} />
          </div>
        </div>

        <div className="tw-map-wrap">
          <div className="map-responsive">
            <iframe src="https://www.google.com/maps/d/embed?mid=1FWC3p6FNTkr_fzqkowE4kizZy28mGV2x&&ll=22.372632748008964%2C114.11543116116347&z=19"></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
