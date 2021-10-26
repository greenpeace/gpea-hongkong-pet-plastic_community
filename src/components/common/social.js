import React from "react";
import styled from "styled-components";
//
import ExternalLink from "./externalLink";
//
const IconWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  > a {
    margin: 0 10px;
  }
`;
const Icon = styled.img`
  width: 30px;
  border-radius: 4px;
`;
//
export default props => {
  return (
    <>
      <IconWrapper>
        <ExternalLink href="https://www.facebook.com/greenpeacehk">
          <Icon
            src={require("../../assets/images/icons/social-facebook.svg")}
          />
        </ExternalLink>
        <ExternalLink href="https://www.instagram.com/greenpeace_hk">
          <Icon
            src={require("../../assets/images/icons/social-instagram.svg")}
          />
        </ExternalLink>
        <ExternalLink href="https://www.youtube.com/user/GreenpeaceChina">
          <Icon src={require("../../assets/images/icons/social-youtube.svg")} />
        </ExternalLink>
        <ExternalLink href="https://twitter.com/greenpeace_hk">
          <Icon src={require("../../assets/images/icons/social-twitter.svg")} />
        </ExternalLink>
        <ExternalLink href="https://medium.com/greenpeace-east-asia">
          <Icon src={require("../../assets/images/icons/social-medium.svg")} />
        </ExternalLink>
      </IconWrapper>
    </>
  );
};
