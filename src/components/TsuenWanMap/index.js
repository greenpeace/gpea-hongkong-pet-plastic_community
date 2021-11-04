import React from "react";
import "./index.scss";

import IconLeft from "../../assets/images/tsuen-wan/GP_PlasticFreeStickers_w.png";
import IconRight from "../../assets/images/tsuen-wan/GP_PlasticFreeStickers_b.png";
import Title from "../../assets/images/tsuen-wan/demo_title.svg";

export default props => {
  return (
    <>
      <div className="topSectionWrap mapSection">
        <div className="twMapTopWrap">
          <div className="titleIcon">
            <img src={IconLeft} />
          </div>
          <div className="twMapTitle">
            <img src={Title} />
          </div>
          <div className="titleIcon">
            <img src={IconRight} />
          </div>
        </div>

        <div className="tw-map-wrap">
          <div className="map-responsive">
            <iframe src="https://www.google.com/maps/d/embed?mid=1FWC3p6FNTkr_fzqkowE4kizZy28mGV2x&z=16&ll=22.371751955858638, 114.11726192723083"></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
