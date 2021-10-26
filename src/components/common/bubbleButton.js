import React from "react";
import styled from "styled-components";

const BubbleWrapper = styled.div`
  padding: 4px;
  background-color: white;
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4));
  border-radius: ${({ fontSize }) => fontSize / 2}px;
  display: inline-block;
  cursor: pointer;
`;

const Frame = styled.div`
  border: 2px solid #004367;
  border-radius: ${({ fontSize }) => fontSize / 2}px;
  display: grid;
  grid-template-columns: auto auto;
  gap: 8px;
  align-items: center;
  padding: 6px 18px;
  direction: ${({ gridOrder }) => gridOrder};
`;

const Arrow = styled.div`
  font-size: ${({ fontSize }) => fontSize}px;
  color: #004367;
`;

const Textbox = styled.div`
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: 600;
  color: #004367;
  padding: 0;
  text-align: center;
`;

export default ({ arrowDirection, buttonSize, children }) => {
  let fontSize = "20"; // defalut font size: 20px
  buttonSize = buttonSize ? buttonSize : "md"; // default button size: md
  switch (buttonSize) {
    case "sm":
      fontSize = "16";
      break;
    case "lg":
      fontSize = "36";
      break;
    default:
  }

  // Arrow direction:
  //    left = show left arrow on left side
  //    right = show right arrow on right side
  // * Will not show arrow when arrowDirection is null
  let gridOrder = null;
  if (arrowDirection && arrowDirection === "left") gridOrder = "ltr";
  if (arrowDirection && arrowDirection === "right") gridOrder = "rtl";

  return (
    <BubbleWrapper fontSize={fontSize}>
      <Frame fontSize={fontSize} gridOrder={gridOrder}>
        {arrowDirection && (
          <Arrow fontSize={fontSize}>
            <i className={`fas fa-angle-double-${arrowDirection} `}></i>
          </Arrow>
        )}
        <Textbox fontSize={fontSize}>{children}</Textbox>
      </Frame>
    </BubbleWrapper>
  );
};
