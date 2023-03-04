import React, { CSSProperties } from "react";

type IconType = {
  style?: CSSProperties | undefined;
  className?: string | undefined;
};

const LetterW2: React.FC<IconType> = (props) => (
  <svg
    {...props}
    width="373"
    height="448"
    viewBox="0 0 373 448"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M222.719 447.638H305.275L372.054 0H293.901L259.778 297.36L218.683 0H153.372L112.277 297.36L78.1534 0H0L66.4121 447.638H149.335L186.027 190.566L222.719 447.638Z"
      fill="white"
    />
  </svg>
);

export default LetterW2;
