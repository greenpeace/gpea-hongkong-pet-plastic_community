import React from "react";
import GradePlayer from "../GradePlayer";
import TitleRibbon from "./../common/titleRibbon";

import Title from "../../assets/images/grade/title.svg";
import Background from "../../assets/images/grade/background.jpg";
import Grade1Ribbon from "../../assets/images/grade/grade1-ribbon.svg";
import Grade2Ribbon from "../../assets/images/grade/grade2-ribbon.svg";
import StickerGrade1 from "../../assets/images/GP_PlasticFreeStickers_grade1.png";
import StickerGrade2 from "../../assets/images/GP_PlasticFreeStickers_grade2.png";

import "./index.scss";

export default props => {
  const { sectionId, devicetype } = props;

  return (
    <>
      <div
        id={sectionId}
        className="section-grade"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className={`section-content ${devicetype}`}>
          <TitleRibbon devicetype={devicetype} src={Title} alt="走塑等級" />

          <p>
            在「全城走塑」的參與店鋪外可找到白色或藍色徽章貼紙。
            <br />
            全城走塑分兩個等級，顯示店鋪不同程度的走塑措施。
            <br />
            就讓你我一起令這些徽章貼紙遍地開花。
          </p>

          <div className={`sticker-wrapper ${devicetype}`}>
            <div className="sticker1">
              <img src={StickerGrade1} className="img" alt="一級走塑店鋪" />
              <div className="textbox">
                <div className="ribbon">
                  <img src={Grade1Ribbon} alt="一級走塑店鋪" />
                </div>
                完全淘汰即棄塑膠 或
                <br />
                提供走塑優惠
              </div>
            </div>
            <div className="sticker1">
              <img src={StickerGrade2} className="img" alt="二級走塑店鋪" />
              <div className="textbox">
                <div className="ribbon">
                  <img src={Grade2Ribbon} alt="二級走塑店鋪" />
                </div>
                不主動提供即棄塑膠 或
                <br />
                歡迎自備餐具/器皿購物
              </div>
            </div>
          </div>
        </div>
      </div>

      <GradePlayer devicetype={devicetype} />
    </>
  );
};
