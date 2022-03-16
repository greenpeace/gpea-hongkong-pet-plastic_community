import React, { useState } from "react";
import "./index.scss";

export default props => {
  const [mapClass, setMapClass] = useState("disablePointer");
  return (
    <div className="hk-map-wrap">
      <div
        className="map-responsive"
        onClick={() =>
          setMapClass(
            mapClass === "disablePointer" ? "activePointer" : "disablePointer"
          )
        }
        onMouseLeave={() => {
          setMapClass("disablePointer");
        }}
      >
        <iframe
          title="走塑地圖"
          className={mapClass}
          src="https://www.google.com/maps/d/embed?mid=1FWC3p6FNTkr_fzqkowE4kizZy28mGV2x&ehbc=2E312F"
        ></iframe>
      </div>
    </div>
  );
};
