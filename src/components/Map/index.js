import React from "react";
import "./index.scss";

export default props => {
  return (
    <div className="hk-map-wrap">
      <div className="map-responsive">
        <iframe src="https://www.google.com/maps/d/embed?mid=1FWC3p6FNTkr_fzqkowE4kizZy28mGV2x&ehbc=2E312F"></iframe>
      </div>
    </div>
  );
};
