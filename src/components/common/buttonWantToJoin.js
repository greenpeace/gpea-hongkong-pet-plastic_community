import React from "react";
import styled from "styled-components";

import BtnWantToJoin from "../../assets/images/btn-want-to-join.svg";

const Btn = styled.img`
  width: 180px;
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4));
`;

export default props => {
  return <Btn src={BtnWantToJoin} alt="我要參加" />;
};
