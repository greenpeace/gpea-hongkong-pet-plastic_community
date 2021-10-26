import React from "react";
import styled from "styled-components";

const Icon = styled.img`
  height: 24px;
  margin: 0 10px;
`;

export const IconFacebook = () => {
  return (
    <>
      <Icon
        src={require("../../assets/images/icons/social-facebook-blue.svg")}
      />
    </>
  );
};

export const IconInstagram = () => {
  return (
    <Icon
      src={require("../../assets/images/icons/social-instagram-blue.svg")}
    />
  );
};
