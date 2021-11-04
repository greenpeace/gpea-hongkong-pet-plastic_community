import React, { useEffect } from "react";

import Fade from "react-reveal/Fade";
import Hero from "../../components/Hero";
import LiveFigure from "../../components/LiveFigure";
import Timeline from "../../components/Timeline";
import Join from "../../components/Join";
import Grade from "../../components/Grade";
import Activity from "../../components/Activity";
import CommunityStory from "../../components/CommunityStory";
import PlasticCommunity from "../../components/PlasticCommunity";
import SupportUs from "../../components/SupportUs";
import Scrollspy from "../../components/ScrollSpy";

export default props => {
  const { devicetype, showActions } = props;

  function hashLinkScroll() {
    console.log("hashLinkScroll");
    const { hash } = window.location;
    if (hash !== "") {
      // Push onto callback queue so it runs after the DOM is updated,
      // this is required when navigating from a different page so that
      // the element is rendered on the page before trying to getElementById.
      setTimeout(() => {
        const id = hash.replaceAll("#", "").replaceAll("/", "");
        // .replace("%23", "");
        const element = document.getElementById(id);
        console.log(id, element);
        if (element) {
          element.scrollIntoView();
          // window.location.hash = "";
        }
      }, 100);
    }
  }

  useEffect(() => {
    hashLinkScroll();
  }, []);
  return (
    <div>
      <Fade>
        <Hero sectionId="top" devicetype={devicetype} />
      </Fade>
      <Fade>
        <LiveFigure sectionId="live-figure" devicetype={devicetype} />
      </Fade>
      <Fade>
        <Timeline sectionId="timeline" devicetype={devicetype} />
      </Fade>
      <Fade>
        <Join sectionId="join" devicetype={devicetype} />
      </Fade>
      <Fade>
        <Grade sectionId="grade" devicetype={devicetype} />
      </Fade>
      <Fade>
        <Activity sectionId="activity" devicetype={devicetype} />
      </Fade>
      <Fade>
        <CommunityStory sectionId="community-story" devicetype={devicetype} />
      </Fade>
      <Fade>
        <PlasticCommunity
          sectionId="plastic-community"
          devicetype={devicetype}
        />
      </Fade>
      <Fade>
        <SupportUs sectionId="support-us" devicetype={devicetype} />
      </Fade>
      <Scrollspy devicetype={devicetype} showActions={showActions} />
    </div>
  );
};
