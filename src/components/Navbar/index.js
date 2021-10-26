import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";

import GPLogo from "../../assets/images/gp-logo-2021-tc-white-lg.png";
import PlasticFreeLogo from "../../assets/images/plastic-free-logo.png";

import "./index.scss";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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
            <li className="nav-item">
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
            </li>
            <li>
              <img src={PlasticFreeLogo} className="pf-logo" alt="全城走塑" />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
