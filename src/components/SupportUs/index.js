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

        <div className="subtitle">推動全港走塑項目，需要你的熱心支持！</div>
        <div className="textbox">
          {devicetype !== "mobile" ? (
            <p>
              請幫助綠色和平組織走塑小隊，身體力行走遍全港社區！
              <br />
              您的捐助，將讓我們在2021年有足夠資源與學校合辦
              <br />
              「走塑學堂」、延續「尋找走塑店鋪」活動，
              <br />
              達成全港1,000間店鋪提供走塑友善措施。
              <br />
              您的支持，是推動項目工作的關鍵，因為綠色和平
              <br />
              從不接受政府和商界資助，在環境工作上保持公正獨立。
            </p>
          ) : (
            <p>
              請幫助綠色和平組織走塑小隊，身體力行走遍全港社區！您的捐助，將讓我們在2021年有足夠資源與學校合辦「走塑學堂」、延續「尋找走塑店鋪」活動，達成全港1,000間店鋪提供走塑友善措施。
              <br />
              您的支持，是推動項目工作的關鍵，因為綠色和平從不接受政府和商界資助，在環境工作上保持公正獨立。
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
