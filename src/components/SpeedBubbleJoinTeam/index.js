import React from "react";
import styled from "styled-components";
import ExternalLink from "../common/externalLink";

import SpeechBubble from "../../assets/images/speech-bubble-join-team.svg";
// import ReportNow from "../../assets/images/report-now.svg";
import ReportNow from "../../assets/images/訂閱最新情報.png";

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

export default props => {
  const { devicetype, showActions } = props;

  return (
    <Wrapper devicetype={devicetype} showActions={showActions}>
      <ExternalLink href="https://forms.gle/S8CMJmLRzdH1tYpp9">
        <Report devicetype={devicetype} src={ReportNow} alt="訂閱最新情報" />
      </ExternalLink>
      <ExternalLink href="https://docs.google.com/forms/d/e/1FAIpQLSflWGgOGtCzeTKDmdQJXf3hf0rHncVZcrWLeadc1TEN7P1Yeg/viewform">
        <Bubble
          devicetype={devicetype}
          src={SpeechBubble}
          alt="有你有可能！加入走塑社區團隊！"
        />
      </ExternalLink>
    </Wrapper>
  );
};
