import React from "react";
import { useHistory } from "react-router-dom";
import ButtonBack from "../../components/common/buttonBack";
import ButtonWantToJoin from "../../components/common/buttonWantToJoin";
import {
  IconFacebook,
  IconInstagram
} from "../../components/common/socialIcons";
import ExternalLink from "../../components/common/externalLink";
import ScrollToTop from "./../../components/common/scrollToTop";

import HtmlData from "./data";

import "./style.scss";

export default props => {
  const { devicetype } = props;
  const { id } = props.match.params;
  const history = useHistory();
  const filteredHtmlData = HtmlData.filter(d => d.id === id);

  return (
    <div className="story-container">
      {/* Jump to page top */}
      <ScrollToTop />

      {filteredHtmlData.length ? (
        <>
          <div
            className={`banner ${devicetype}`}
            style={{
              backgroundImage: `url(${filteredHtmlData[0].banner})`
            }}
          />

          <div className={`section-content ${devicetype}`}>
            <div className="head-bar">
              <div className="clickable" onClick={() => history.goBack()}>
                <ButtonBack />
              </div>

              <div className="social-icons">
                <ExternalLink href="https://www.facebook.com/greenpeacehk">
                  <IconFacebook />
                </ExternalLink>
                <ExternalLink href="https://www.instagram.com/greenpeace_hk">
                  <IconInstagram />
                </ExternalLink>
              </div>
            </div>

            <h1 className="title">{filteredHtmlData[0].title}</h1>
            <div className="date">{filteredHtmlData[0].date}</div>

            <div className="med-bar">
              <p>活動情報</p>
            </div>

            {filteredHtmlData[0].content}

            <div className="foot-bar">
              <ExternalLink href="https://forms.gle/N5jr5hZxCuq85Vpd6">
                <ButtonWantToJoin />
              </ExternalLink>
            </div>
          </div>
        </>
      ) : (
        <div className="data-not-found">
          <span>找不到內容</span>
          <div className="clickable" onClick={() => history.goBack()}>
            <ButtonBack />
          </div>
        </div>
      )}
    </div>
  );
};
