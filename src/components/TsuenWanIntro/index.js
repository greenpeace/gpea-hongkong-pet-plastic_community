import React from "react";
import "./index.scss";

import Logo from "../../assets/images/tsuen-wan/logo_horizontal.png";
import Background from "../../assets/images/tsuen-wan/background_custom.svg";
import Step from "../../assets/images/tsuen-wan/step.jpg";

export default props => {
  return (
    <>
      <div
        className="introSection"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="twLogoWrap">
          <img src={Logo} />
        </div>

        <div className="tw-intro-wrap">
          <div className="row">
            <div className="column">
              <div className="tw-intro">
                <div className="subtitle">
                  「走塑」不是一個人的事，亦不只得一個方式
                </div>
                自備餐具、拒用無謂包裝，或以社區網絡推動重用容器，抗衡即棄塑膠，一同建構我們理想的走塑社區。
                <br />
                <br />
              </div>
              <div>
                {/* <b>重用餐具借還流程:</b>
            <br />
            1.直接於店鋪借重用餐具(無需按金)
            <br />
            2.活動時間內放回歸還點
            <br />
            <br /> */}
                活動地點: 荃灣路德圍
                <br />
                <div style={{ display: "flex" }}>
                  <div className="dateWrap">活動日期:</div>
                  <div>2021年11月27、2021年12月18日、2022年 1月15日</div>
                </div>
                活動時間: 中午12時 - 下午5時
              </div>
            </div>
            <div className="column">
              <div className="stepWrap">
                <img src={Step} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
