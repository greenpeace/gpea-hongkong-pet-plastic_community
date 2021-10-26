import React, { useState } from "react";
import TitleRibbon from "../common/titleRibbon";

import Title from "../../assets/images/join/title.svg";
import Background from "../../assets/images/join/background.svg";
import LevelLadder from "../../assets/images/join/level-ladder-lg.png";
import ShowMoreButton from "../../assets/images/join/show-more-button.svg";

import "./index.scss";

export default props => {
  const { sectionId, devicetype } = props;
  const [showBubbleNo, setBubbleToShow] = useState(0);

  // Show one bubble
  const handleShowBubble = bubbleNo => {
    setBubbleToShow(bubbleNo);
  };

  // Set all bubbles to hiddden
  const handleOffAllBubbles = () => {
    setBubbleToShow(0);
  };

  return (
    <div
      id={sectionId}
      className="section-join"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className={`section-content ${devicetype}`}>
        <TitleRibbon devicetype={devicetype} src={Title} alt="加入團隊" />
        {devicetype !== "mobile" ? (
          <p>
            你想參與新手隊員體驗日，或落手落腳策劃走塑行動，
            <br />
            都可以在此報名加入「走塑社區團隊」！
            <br />
            透過一系列共學、策劃工作坊及社區實驗等，
            <br />
            我們希望凝聚有心的行動者組成走塑團隊，
            <br />
            以至擔任走塑隊長，感染更多社區持份者加入走塑行列！
          </p>
        ) : (
          <p>
            你想參與新手隊員體驗日，或落手落腳策劃走塑行動，都可以在此報名加入「走塑社區團隊」！透過一系列共學、策劃工作坊及社區實驗等，我們希望凝聚有心的行動者組成走塑團隊，以至擔任走塑隊長，感染更多社區持份者加入走塑行列！
          </p>
        )}

        <div className="hashtag">#有你有可能</div>
        <div className={`level-ladder ${devicetype}`}>
          <img src={LevelLadder} alt="" />

          <div className="desc">
            加入團隊後，
            <br />
            你可以參與不同程度的任務
          </div>

          <div
            id="show-bubble1"
            className="show-more-button clickable"
            onMouseEnter={() => handleShowBubble(1)}
            onMouseLeave={handleOffAllBubbles}
          >
            <img src={ShowMoreButton} alt="" />
          </div>
          <div
            id="show-bubble2"
            className="show-more-button clickable"
            onMouseEnter={() => handleShowBubble(2)}
            onMouseLeave={handleOffAllBubbles}
          >
            <img src={ShowMoreButton} alt="" />
          </div>
          <div
            id="show-bubble3"
            className="show-more-button clickable"
            onMouseEnter={() => handleShowBubble(3)}
            onMouseLeave={handleOffAllBubbles}
          >
            <img src={ShowMoreButton} alt="" />
          </div>
          <div
            id="show-bubble4"
            className="show-more-button clickable"
            onMouseEnter={() => handleShowBubble(4)}
            onMouseLeave={handleOffAllBubbles}
          >
            <img src={ShowMoreButton} alt="" />
          </div>

          <div
            id="bubble1"
            className={`bubble-box ${showBubbleNo === 1 ? "isShow" : ""}`}
          >
            <div className="text-box">
              <div className="subtitle">社區營造小隊</div>
              組成社區營造小隊，一起走入社區，連繫成走塑網路！
            </div>
          </div>

          <div
            id="bubble2"
            className={`bubble-box ${showBubbleNo === 2 ? "isShow" : ""}`}
          >
            <div className="text-box">
              <div className="subtitle">走塑隊長</div>
              帶領新手隊員擴展走塑版圖，邀請更多店舖成為我們一員，以至推動店舖走塑升級！
            </div>
          </div>

          <div
            id="bubble3"
            className={`bubble-box ${showBubbleNo === 3 ? "isShow" : ""}`}
          >
            <div className="text-box">
              <div className="subtitle">新手隊員體驗日</div>
              成為單日隊員，在隊長帶領下在全港發掘走塑小店，推廣走塑理念。
            </div>
          </div>

          <div
            id="bubble4"
            className={`bubble-box ${showBubbleNo === 4 ? "isShow" : ""}`}
          >
            <div className="text-box">
              <div className="subtitle">社區游擊小隊</div>
              透過網上連結其他隊員，把走塑任務融入日常生活中，隨時隨地發掘走塑店舖及故事。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
