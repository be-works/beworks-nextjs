import React, { CSSProperties } from "react";

type IconType = {
  style?: CSSProperties | undefined;
  className?: string | undefined;
};

const LetterK2: React.FC<IconType> = (props) => (
  <svg
    {...props}
    width="238"
    height="448"
    viewBox="0 0 238 448"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.824219 447.638L70.8695 447.638V230.214L166.583 447.638H238.001L123.38 214.227L234.474 0H164.82L70.8695 204.635V0H0.824219V447.638Z"
      fill="white"
    />
  </svg>
);

export default LetterK2;
