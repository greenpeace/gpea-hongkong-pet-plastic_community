import React from "react";
import styled from "styled-components";
//
const StyledLink = styled.a`
  text-decoration: none;
  color: #005f89 !important;
  &:hover {
    text-decoration: none;
  }
`;
//
export default props => {
  return (
    <StyledLink
      target="_blank"
      rel="noopener noreferrer"
      href={props.href}
      alt={props.alt}
    >
      {props.children}
    </StyledLink>
  );
};
