import React from "react";
import TitleRibbon from "../common/titleRibbon";
import { Link } from "react-router-dom";

import Title from "../../assets/images/activity/title.svg";
import Background from "../../assets/images/activity/background.svg";
import BtnLearnMore from "../../assets/images/btn-learn-more-white.svg";

import CardData from "../../pages/Activity/data";

import "./index.scss";

export default props => {
  const { sectionId, devicetype } = props;

  return (
    <div
      id={sectionId}
      className="section-activity"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className={`section-content ${devicetype}`}>
        <TitleRibbon devicetype={devicetype} src={Title} alt="活動情報" />

        <div className={`activity-wrapper ${devicetype}`}>
          {CardData.map((card, i, arr) => (
            <Link
              key={card.id}
              to={`/activity/${card.id}`}
              devicetype={devicetype}
            >
              <div className="card">
                <div
                  className="img-frame"
                  style={{ background: `url(${card.thumbnail})` }}
                >
                  <div className="cover">
                    <img src={BtnLearnMore} className="btn-learn-more" alt="" />
                  </div>
                </div>
                <div className="caption">
                  <div className="card-title">{card.title}</div>
                  <div className="card-date">{card.date}</div>
                </div>
              </div>
            </Link>
          ))}
          <div class="center">
            <div className="caption">
              <div className="card-title">Coming soon</div>
              <ul>
                <li>嘉賓分享 ‧ 社區走塑經驗分享會</li>
                <li>社區走塑共學TEAM</li>
                <li>...</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
