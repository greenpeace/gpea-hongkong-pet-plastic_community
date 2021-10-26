import React from "react";
import styled from "styled-components";

const TitleRibbon = styled.img`
  display: block;
  margin: 0 auto 40px;
  height: ${({ height }) => height}px;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.7));
`;

export default ({ devicetype, src, alt }) => {
  let height = "44"; // defalut height: 44px
  switch (devicetype) {
    case "tablet":
      height = "70";
      break;
    case "desktop":
      height = "70";
      break;
    default:
    // default mobile size
  }
  return <TitleRibbon height={height} src={src} alt={alt} />;
};
