import React from "react";
import ExternalLink from "../common/externalLink";

import ImgLg from "../../assets/images/intro/image-lg.svg";
import ImgSm from "../../assets/images/intro/image-sm.svg";
import Background from "../../assets/images/intro/background.svg";
import BubbleBtn from "../../assets/images/intro/bubble-btn.svg";

import "./index.scss";

export default props => {
  const { devicetype } = props;

  return (
    <div
      id="intro"
      className="section-intro"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className={`section-content ${devicetype}`}>
        <img
          src={devicetype === "mobile" ? ImgSm : ImgLg}
          className="intro-img"
          alt="全城走塑 走塑優惠"
        />

        <div className="textbox">
          {devicetype !== "mobile" ? (
            <div>
              <p>
                綠色和平的「全城走塑計劃」集齊一眾走塑隊員
                <br />
                在社區搜索走塑小店，自2018年至今，
                <br />
                有138位參與，以及全港逾600間商戶加入走塑行列。
                <br />
                看到「全城走塑」貼紙，即是找到走塑友善或提供走塑優惠的店舖!
              </p>
              <p>
                我們希望有你加入，與其他行動者組成走塑社區團隊。
                <br />
                由探索、策劃方案至行動，齊齊一手一腳把你關心的社區
                <br />
                建成走塑社區，擴大走塑版圖，達到2021年突破全港1,100間
                <br />
                走塑店舖的目標！無論你是商戶店主、個人或團體，
                <br />
                只要有相同的理念，就可立即與我們組隊，實踐無塑香港！
              </p>
              <p>
                走塑沒有捷徑，只有堅持。
                <br />
                但有你們這群隊友並肩作戰，誰說沒有可能？
              </p>
            </div>
          ) : (
            <div>
              <p>
                綠色和平的「全城走塑計劃」集齊一眾走塑隊員在社區搜索走塑小店，自2018年至今，有138位參與，以及全港逾600間商戶加入走塑行列。看到「全城走塑」貼紙，即是找到走塑友善或提供走塑優惠的店舖！
              </p>
              <p>
                我們希望有你加入，與其他行動者組成走塑社區團隊。由探索、策劃方案至行動，齊齊一手一腳把你關心的社區建成走塑社區，擴大走塑版圖，達到2021年突破全港1,100間走塑店舖的目標！無論你是商戶店主、個人或團體，只要有相同的理念，就可立即與我們組隊，實踐無塑香港！
              </p>
              <p>
                走塑沒有捷徑，只有堅持。但有你們這群隊友並肩作戰，誰說沒有可能？
              </p>
            </div>
          )}
        </div>

        <ExternalLink href="https://forms.gle/N5jr5hZxCuq85Vpd6">
          <img src={BubbleBtn} className="bubble-btn" alt="加入走塑社區團隊" />
        </ExternalLink>
      </div>
    </div>
  );
};
