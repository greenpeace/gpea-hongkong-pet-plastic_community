import React from "react";
// import Intro from "../../components/Intro";
import "./index.scss";

import Logo from "../../assets/images/tsuen-wan/logo.png";

export default props => {
  const { devicetype } = props;

  return (
    <>
      <div className="topSectionWrap">
        <div className="row">
          <div className="column">
            <img src={Logo} />
            如果有天，走進社區，講一聲
            #唔該借借，立食小店和手搖飲品店都能提供可重用餐具，進食後餐具能在不同回收點歸還，滿足便利和環保的願望。這個願意盒子，你願意一同打開嗎？
          </div>
          <div className="column"></div>
        </div>
      </div>
    </>
  );
};
