import React from "react";
import TitleRibbon from "./../common/titleRibbon";
import ExternalLink from "../common/externalLink";

import Title from "../../assets/images/support-us/title.svg";
import Donate from "../../assets/images/support-us/donate.svg";
import JoinUs from "../../assets/images/support-us/join-us.svg";
import BtnDonate from "../../assets/images/support-us/btn-donate.svg";
import BtnJoinUs from "../../assets/images/support-us/btn-join-us.svg";
import Background from "../../assets/images/support-us/background.svg";

import "./index.scss";

export default props => {
  const { devicetype } = props;

  return (
    <div
      id={props.sectionId}
      className="section-support-us"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className={`section-content ${devicetype}`}>
        <TitleRibbon devicetype={devicetype} src={Title} alt="支持我們" />
        <div className="subtitle">建立走塑社區，需要您的支持！</div>
        <div className="textbox">
          {devicetype !== "mobile" ? (
            <p>
              綠色和平身體力行走遍全港社區，鼓勵更多店鋪作出走塑營商方針，由提供走塑優惠、淘汰即棄塑膠用品，到參與「重用餐具社區實驗」
              等。目前，綠色和平已招募超過1,000間店鋪加入走塑行列，有您的支持，我們定能一步步令走塑成為社區日常。
              <br />
              誠邀您成為綠色和平會員，以每月$200 捐款
              （約每日$6），支持建立走塑社區的工作，向全城走塑目標大步邁進！
            </p>
          ) : (
            <p>
              綠色和平身體力行走遍全港社區，鼓勵更多店鋪作出走塑營商方針，由提供走塑優惠、淘汰即棄塑膠用品，到參與「重用餐具社區實驗」
              等。目前，綠色和平已招募超過1,000間店鋪加入走塑行列，有您的支持，我們定能一步步令走塑成為社區日常。
              <br />
              誠邀您成為綠色和平會員，以每月$200 捐款
              （約每日$6），支持建立走塑社區的工作，向全城走塑目標大步邁進！
            </p>
          )}
        </div>

        <div className="btn-container">
          <ExternalLink href="https://act.gp/3asrf0s">
            <img
              src={BtnDonate}
              className="bubble-btn"
              alt="每日約6元小額捐助 支持全港走塑項目"
            />
          </ExternalLink>
        </div>

        <img src={Donate} className="pic" alt="" />

        <div className="subtitle">
          小店也做到，大企業更應以身作則
          <br />
          #有你有可能
        </div>
        <div className="textbox">
          {devicetype !== "mobile" ? (
            <p>
              既然小店與您我也能做到，大企業也需要出一分力，
              <br />
              唯有集眾人之力，一起推動全城走塑，才能成功。
              <br />
              立即聯署，繼續推動超市走塑，向塑膠污染下戰書！
            </p>
          ) : (
            <p>
              既然小店與您我也能做到，大企業也需要出一分力，唯有集眾人之力，一起推動全城走塑，才能成功。
              <br />
              立即聯署，繼續推動超市走塑，向塑膠污染下戰書！
            </p>
          )}
        </div>

        <div className="btn-container">
          <ExternalLink href="https://act.gp/2LlCkYJ">
            <img
              src={BtnJoinUs}
              className="bubble-btn"
              alt="加入聯署 集氣推動超市走塑"
            />
          </ExternalLink>
        </div>

        <img src={JoinUs} className="pic" alt="" />
      </div>
    </div>
  );
};
