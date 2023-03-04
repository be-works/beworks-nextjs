import React, { CSSProperties } from "react";

type IconType = {
  style?: CSSProperties | undefined;
  className?: string | undefined;
};

const LetterE1: React.FC<IconType> = (props) => (
  <svg
    {...props}
    width="238"
    height="450"
    viewBox="0 0 238 450"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.5 448.638V449.138H1H236.222H236.722V448.638V368.063V367.563H236.222L70.8937 367.563V262.409L210.723 262.409H211.223V261.909V181.974V181.474H210.723L70.8937 181.474V82.7143H230.485H230.985V82.2143V1V0.5H230.485H1H0.5V1V448.638Z"
      stroke="white"
    />
  </svg>
);

export default LetterE1;
