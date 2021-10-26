import React from "react";
import TitleRibbon from "./../common/titleRibbon";

import Title from "../../assets/images/timeline/title.svg";
import Background from "../../assets/images/timeline/background.svg";
import TopMarginBg from "../../assets/images/timeline/top-margin-bg.svg";
import Photo2018 from "../../assets/images/timeline/photo2018.jpg";
import Photo2019 from "../../assets/images/timeline/photo2019.jpg";
import Photo2020 from "../../assets/images/timeline/photo2020.jpg";
import Photo2021 from "../../assets/images/timeline/photo2021.jpg";

import "./index.scss";

export default props => {
  const { sectionId, devicetype } = props;

  return (
    <div
      id={sectionId}
      className="section-timeline"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div
        className="top-margin-wrapper"
        style={{ backgroundImage: `url(${TopMarginBg})` }}
      >
        <div className={`section-content ${devicetype}`}>
          <TitleRibbon devicetype={devicetype} src={Title} alt="走塑歷程" />

          <div className="timeline-wrapper">
            <div className={`timelineItem ${devicetype}`}>
              <div className="img-frame">
                <img src={Photo2018} alt="" />
              </div>
              <div className="caption">
                <span className="item-year">2018年</span>
                <div className="item-title">
                  {devicetype === "mobile" ? (
                    <span>
                      「全城走塑」正式上架
                      <br />
                      廣邀隊員尋找走塑食堂
                    </span>
                  ) : (
                    <span>
                      「全城走塑」正式上架
                      <br />
                      廣邀隊員尋找走塑食堂
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className={`timelineItem ${devicetype}`}>
              <div className="img-frame">
                <img src={Photo2019} alt="" />
              </div>
              <div className="caption">
                <span className="item-year">2019年</span>
                <div className="item-title">
                  {devicetype === "mobile" ? (
                    <span>
                      成功推動百佳試行裸裝蔬果計劃，旗下GREAT超市增設「裸買補充站」，讓顧客能自備容器購買產品
                    </span>
                  ) : (
                    <span>
                      成功推動百佳試行裸裝蔬果計劃，
                      <br />
                      旗下GREAT超市增設「裸買補充站」，
                      <br />
                      讓顧客能自備容器購買產品
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className={`timelineItem ${devicetype}`}>
              <div className="img-frame">
                <img src={Photo2020} alt="" />
              </div>
              <div className="caption">
                <span className="item-year">2020年</span>
                <div className="item-title">
                  {devicetype === "mobile" ? (
                    <span>
                      疫情下仍然堅持初心，連結力量，一起繼續為走塑打拼
                    </span>
                  ) : (
                    <span>
                      疫情下仍然堅持初心，
                      <br />
                      連結力量，一起繼續為走塑打拼
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className={`timelineItem ${devicetype}`}>
              <div className="img-frame">
                <img src={Photo2021} alt="" />
              </div>
              <div className="caption">
                <span className="item-year">2021年</span>
                <div className="item-title">
                  <span>
                    以全港突破1,100+間
                    <br />
                    走塑店鋪為目標
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
