import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import GPLogo from "../../assets/images/gp-logo-2021-tc-white-lg.png";
import PlasticFreeLogo from "../../assets/images/plastic-free-logo.png";

import "./index.scss";

function Navbar() {
  const location = useLocation();
  const [click, setClick] = useState(false);
  const [hideNav, setHideNav] = useState(location.pathname === '/TsuenWan');

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    setHideNav(location.pathname === '/TsuenWan')
  }, [location.pathname]);
  

  const NAV = hideNav ? [] : [{label: '首頁', value: 'intro'}, 
  {label: '走塑歷程', value: 'timeline'},
  {label: '加入團隊', value: 'join'},
  {label: '走塑等級', value: 'grade'},
  {label: '活動情報', value: 'activity'},
  {label: '走塑地圖', value: 'plastic-community'},
  {label: '荃灣', value: 'TsuenWan'},
  {label: '支持我們', value: 'support-us'}]

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <HashLink to="/#" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={GPLogo} className="xxgp-logo" alt="GREENPEACE 綠色和平" />
          </HashLink>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
          {NAV.map(d=><li className={`nav-item ${hideNav && `hide`}`}  key={d.label}>
              <HashLink
                smooth
                to={`/${d.value}`}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                {d.label}
              </HashLink>
            </li>)}
            {/* <li className="nav-item">
              <HashLink
                smooth
                to="/#intro"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                首頁
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                smooth
                to="/#timeline"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                走塑歷程
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                smooth
                to="/#join"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                加入團隊
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                smooth
                to="/#grade"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                走塑等級
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                smooth
                to="/#activity"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                活動情報
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                smooth
                to="/#community-story"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                社區故事
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                smooth
                to="/#plastic-community"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                走塑地圖
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                smooth
                to="/#support-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                支持我們
              </HashLink>
            </li> */}
            <li>
            <HashLink
                smooth
                to="/#intro"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                 <img src={PlasticFreeLogo} className="pf-logo" alt="全城走塑" />
              </HashLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
