import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import ExternalLink from "../common/externalLink";

import SpeechBubble from "../../assets/images/speech-bubble-join-team.svg";
// import ReportNow from "../../assets/images/report-now.svg";
import ReportNow from "../../assets/images/訂閱最新情報.png";

import SpeechBubbleTW from "../../assets/images/tsuen-wan/speech-bubble-join-team.svg";
import ReportNowTW from "../../assets/images/tsuen-wan/subscription.png";

const Wrapper = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 1;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 12px;
  transition: all 0.2s;
  flex-direction: ${({ devicetype }) =>
    devicetype === "mobile" ? "column" : "row"};
  visibility: ${({ showActions }) => (showActions ? "visible" : "hidden")};
`;

const Bubble = styled.img`
  filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5));
  cursor: pointer;
  width: ${({ devicetype }) => (devicetype === "mobile" ? "100px" : "150px")};
`;

const Report = styled.img`
  margin-top: 5px;
  filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5));
  width: ${({ devicetype }) => (devicetype === "mobile" ? "60px" : "100px")};
`;

const CTA = {
  bubble: {
    img: SpeechBubble,
    alt: "訂閱最新情報",
    href: "https://forms.gle/S8CMJmLRzdH1tYpp9"
  },
  report: {
    img: ReportNow,
    alt: "有你有可能！加入走塑社區團隊！",
    href:
      "https://docs.google.com/forms/d/e/1FAIpQLSflWGgOGtCzeTKDmdQJXf3hf0rHncVZcrWLeadc1TEN7P1Yeg/viewform"
  }
};

const CTATW = {
  bubble: {
    img: SpeechBubbleTW,
    alt: "義工招募",
    href: "https://forms.gle/azRiHVJZgytQiYSF8"
  },
  report: {
    img: ReportNowTW,
    alt: "話我哋知您點睇",
    href: "https://forms.gle/9Jvb6M3DS9wePphRA"
  }
};

export default props => {
  const location = useLocation();
  const [isTW, setTW] = React.useState(location.pathname === "/TsuenWan");
  const [currentCTA, setCTA] = React.useState(CTA);
  const { devicetype, showActions } = props;

  React.useEffect(() => {
    setTW(location.pathname === "/TsuenWan");
  }, [location.pathname]);

  React.useEffect(() => {
    isTW ? setCTA(CTATW) : setCTA(CTA);
  }, [isTW]);

  return (
    <Wrapper devicetype={devicetype} showActions={showActions}>
      {currentCTA && (
        <>
          <ExternalLink href={currentCTA.report.href}>
            <Report
              devicetype={devicetype}
              src={currentCTA.report.img}
              alt={currentCTA.report.alt}
            />
          </ExternalLink>
          <ExternalLink href={currentCTA.bubble.href}>
            <Bubble
              devicetype={devicetype}
              src={currentCTA.bubble.img}
              alt={currentCTA.bubble.alt}
            />
          </ExternalLink>
        </>
      )}
    </Wrapper>
  );
};
