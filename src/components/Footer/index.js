import React from "react";
import Social from "../common/social";
import SpeechBubbleJoinTeam from "../SpeedBubbleJoinTeam";

import "./index.scss";

import GPLogo from "../../assets/images/gp-logo-2021-tc-white-lg.png";

export default props => {
  const { devicetype, showActions } = props;

  return (
    <>
      <div className="footer">
        <SpeechBubbleJoinTeam
          devicetype={devicetype}
          showActions={showActions}
        />

        <div className={`footer-content ${devicetype}`}>
          <img src={GPLogo} alt="GREENPEACE 綠色和平" className="logo" />
          {devicetype === "mobile" ? (
            <div>
              綠色和平是獨立的國際環保組織，通過科學研究、政策倡議及和平行動，揭露全球環境問題並提出相應解決方案。
              <br />
              我們從不接受任何政府、企業或政治團體的資助，只接受個人的直接捐款，以維持公正獨立。
            </div>
          ) : (
            <div>
              綠色和平是獨立的國際環保組織，通過科學研究、政策倡議及和平行動，
              <br />
              揭露全球環境問題並提出相應解決方案。
              <br />
              我們從不接受任何政府、企業或政治團體的資助，
              <br />
              只接受個人的直接捐款，以維持公正獨立。
            </div>
          )}
          <Social />
          <div className="copyright">&copy; GREENPEACE 2021</div>
          <div className="splite-line"></div>
          {/*
          <div className="notice">
            <p>注意事項</p>

            <p>
              此捐款頁面採用了SSL保安接層加密技術，可確保敏感資料（例如信用卡資料和個人資料）在您的瀏覽器和我們伺服器之間傳送時獲得保密處理。
              <br />
              我們會即時進行首次過賬，隨後的每月捐款則會在每月13號過賬，若未能成功過賬，我們會在月底再次嘗試。
              <br />
              信用卡到期後，每月捐款仍會自動延續。如有意取消或更改授權，必須於最少10個工作天之前，以書面或電話通知本會。
              <br />
              收集所得的個人資料將絕對保密並只作和閣下聯絡用途！
              <ExternalLink
                href="https://www.greenpeace.org/hongkong/policies/privacy-and-cookies/"
                alt="私隱保護政策"
              >
                按此了解
              </ExternalLink>
              我們的私隱保護政策。
              <br />
              捐款港幣$100以上可申請扣稅。如需索取捐款收據，請聯絡
              <ExternalLink
                href="mailto:donor.services.hk@greenpeace.org"
                alt="donor.services.hk@greenpeace.org"
              >
                donor.services.hk@greenpeace.org
              </ExternalLink>
              或致電 (852) 2854 8318。
              <br />
              獲豁免繳稅慈善機構編號︰ 91/5418
            </p>
          </div>
          */}
        </div>
      </div>
    </>
  );
};
