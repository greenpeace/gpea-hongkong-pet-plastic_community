import React from "react";
import Scrollspy from "react-scrollspy";

import "./style.scss";

export default props => {
  const { devicetype, showActions } = props;

  return (
    <div className={`scrollspy ${devicetype} ${showActions ? "" : "hidden"}`}>
      <Scrollspy
        className=""
        items={[
          "intro",
          "timeline",
          "join",
          "grade",
          "activity",
          "community-story",
          "plastic-community",
          "support-us"
        ]}
        currentClassName="isCurrent"
      >
        <li>
          <a href="#intro" className="dot">
            <span>首頁</span>
          </a>
        </li>
        <li>
          <a href="#timeline" className="dot">
            <span>走塑歷程</span>
          </a>
        </li>
        <li>
          <a href="#join" className="dot">
            <span>加入團隊</span>
          </a>
        </li>
        <li>
          <a href="#grade" className="dot">
            <span>走塑等級</span>
          </a>
        </li>
        <li>
          <a href="#activity" className="dot">
            <span>活動情報</span>
          </a>
        </li>
        <li>
          <a href="#community-story" className="dot">
            <span>社區故事</span>
          </a>
        </li>
        <li>
          <a href="#plastic-community" className="dot">
            <span>走塑地圖</span>
          </a>
        </li>
        <li>
          <a href="#support-us" className="dot">
            <span>支持我們</span>
          </a>
        </li>
      </Scrollspy>
    </div>
  );
};
