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
          <img src={Logo} alt="logo" />
        </div>

        <div className="tw-intro-wrap">
          <div className="row">
            <div className="column">
              <div className="tw-intro">
                <h2 className="subtitle">
                  「走塑」不是一個人的事，亦不只得一個方式
                </h2>
                <div>
                  自備餐具、拒用無謂包裝，或以社區網絡推動重用容器，抗衡即棄塑膠，一同建構我們理想的走塑社區。
                </div>
                <br />
                <div>
                  <b>重用餐具借還流程：</b>
                  <br />
                  1.直接於店鋪借重用餐具(無需按金)
                  <br />
                  2.活動時間內放回歸還點
                  <br />
                </div>
                <br />
                <div>
                  <span className="datewrap">活動地點：</span>荃灣路德圍
                  <br />
                  <span className="datewrap">活動日期：</span>
                  2021年11月27日、2021年12月11日、2022年1月15日（星期六）
                  <br />
                  <span className="datewrap">活動時間：</span>中午12時 - 下午5時
                  <br />
                  <b>
                    <small>
                      * 因應政府的防疫指引，原定1月15日的活動將延期舉行。
                    </small>
                  </b>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="stepWrap">
                <img src={Step} alt="步驟" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
