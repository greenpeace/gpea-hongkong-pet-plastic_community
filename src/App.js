import React, { useState, useEffect, useRef } from "react";
import mitt from "mitt";
import cx from "classnames";
import "sanitize.css";
import "flexboxgrid/css/flexboxgrid.min.css";
import "swiper/css/swiper.css";
import "./styles/App.scss";
import gpLogo from "./assets/images/GP-logo-2019-TC-green-[web]-01.png";

import { Route, Switch, HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CommunityStory from "./pages/CommunityStory/";
import Activity from "./pages/Activity/";
import Footer from "./components/Footer";

// hack to retrieve the current enform status
//import { resolveEnPageStatus } from "./components/EnForm_orgl/formHelpers";

//let enPageStatus = resolveEnPageStatus();

window.ee = new mitt();

function App() {
  const [isLoaded, setisLoaded] = useState(false);
  const [pageResizing, setPageResizing] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const [devicetype, setdevicetype] = useState("mobile");
  //const [browserWidth, setBrowserWidth] = useState(window.innerWidth);
  const [showFormModal, setShowFormModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const yPos = window.scrollY;
      const actionPos = window.innerHeight * 0.85;
      setShowActions(yPos > actionPos); // scroll over header
    };
    const handleWindowResize = () => {
      setPageResizing(true);
      setisLoaded(false);
      //setBrowserWidth(window.innerWidth);

      if (window.innerWidth < 768) {
        // setIsMobile(true);
        setdevicetype("mobile");
        //} else if (!isMobile && window.innerWidth < 1400) {
      } else if (window.innerWidth >= 768 && window.innerWidth < 1200) {
        // setIsTablet(true);
        setdevicetype("tablet");
        //setShowFormModal(false);
      } else {
        // setIsDesktop(true);
        setdevicetype("desktop");
      }
      setPageResizing(false);
      setisLoaded(true);
    };
    window.addEventListener("load", handleWindowResize);
    window.addEventListener("scroll", handleScroll, false);
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("load", handleWindowResize);
      window.removeEventListener("scroll", handleScroll, false);
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <HashRouter hashType="noslash">
      <div className={cx("app", { "modal-open": showFormModal })}>
        {pageResizing && (
          <div className="loading--overlay">
            <img src={gpLogo} alt="greenpeace logo" />
          </div>
        )}
        <main className={cx("main", { "fade-in": isLoaded })}>
          <div className="main-container">
            <Navbar />
            <Switch>
              <Route
                path="/communitystory/:id"
                render={props => (
                  <CommunityStory devicetype={devicetype} {...props} />
                )}
              />
              <Route
                path="/activity/:id"
                render={props => (
                  <Activity devicetype={devicetype} {...props} />
                )}
              />
              <Route
                path="/"
                render={() => (
                  <Home devicetype={devicetype} showActions={showActions} />
                )}
              />
            </Switch>
          </div>
          <Footer devicetype={devicetype} showActions={showActions} />
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
