import React from "react";
import Intro from "../../components/Intro";
import "./index.scss";

export default props => {
  const { devicetype } = props;

  return (
    <>
      <Intro devicetype={devicetype} />
    </>
  );
};
