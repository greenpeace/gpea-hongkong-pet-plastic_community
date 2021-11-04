import React, { useEffect } from "react";

import Fade from "react-reveal/Fade";
import Hero from "../../components/TsuenWanHero";
import Map from "../../components/TsuenWanMap";
import Intro from "../../components/TsuenWanIntro";
import SupportUs from "../../components/TsuenWanSupportUs";
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
        <Hero devicetype={devicetype} />
      </Fade>
      <Fade>
        <Intro devicetype={devicetype} />
      </Fade>
      <Fade>
        <Map devicetype={devicetype} />
      </Fade>
      <Fade>
        <SupportUs sectionId="support-us" devicetype={devicetype} />
      </Fade>
      {/* <Scrollspy devicetype={devicetype} showActions={showActions} /> */}
    </div>
  );
};
