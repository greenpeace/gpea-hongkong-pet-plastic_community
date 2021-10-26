import React from "react";
import styled from "styled-components";

import BtnBack from "../../assets/images/btn-back.svg";

const Btn = styled.img`
  width: 130px;
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4));
`;

export default props => {
  return <Btn src={BtnBack} alt="上一頁" />;
};
