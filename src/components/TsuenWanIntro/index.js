import React from "react";
import "./index.scss";

import Logo from "../../assets/images/tsuen-wan/logo_horizontal.png";
import Background from "../../assets/images/tsuen-wan/background_custom.svg";

export default props => {
  return (
    <>
      <div
        className="introSection"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="twLogoWrap">
          <img src={Logo} />
        </div>

        <div className="tw-intro-wrap">
          <div>
            「走塑」不是一個人的事，亦不只得一個方式：
            <br />
            自備餐具、拒用無謂包裝，或以社區網絡推動重用容器，抗衡即棄塑膠，一同建構我們理想的走塑社區。
          </div>
          <div>
            重用餐具借還流程:
            <br />
            1. 直接於店鋪借重用餐具(無需按金)
            <br />
            3. 活動時間內放回歸還點
            <br />
            <br />
            活動日期：2021年11月20、12月18日 ; 2022年 1月15日
            <br />
            活動時間: 中午12時 - 下午5時
          </div>
        </div>
      </div>
    </>
  );
};
