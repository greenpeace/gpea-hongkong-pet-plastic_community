import React, { useEffect } from "react";

import Fade from "react-reveal/Fade";
import Hero from "../../components/TsuenWanHero";
import Map from "../../components/TsuenWanMap";
import Intro from "../../components/TsuenWanIntro";
import SupportUs from "../../components/TsuenWanSupportUs";
import CommunityStory from "../../components/CommunityStory";

export default props => {
  const { devicetype, showActions } = props;

  useEffect(() => {
    window.scrollTo({
      top: 0
    });
  }, []);
  return (
    <div>
      <Fade>
        <Hero devicetype={devicetype} />
      </Fade>
      <Fade>
        <Intro devicetype={devicetype} />
      </Fade>
      <Fade>
        <Map devicetype={devicetype} />
      </Fade>
      <Fade>
        <CommunityStory sectionId="community-story" devicetype={devicetype} />
      </Fade>
      <Fade>
        <SupportUs sectionId="support-us" devicetype={devicetype} />
      </Fade>
    </div>
  );
};
