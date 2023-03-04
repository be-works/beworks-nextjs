import React, { CSSProperties } from "react";

type IconType = {
  style?: CSSProperties | undefined;
  className?: string | undefined;
};

const LetterK1: React.FC<IconType> = (props) => (
  <svg
    {...props}
    width="239"
    height="450"
    viewBox="0 0 239 450"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.32422 448.638V449.138H1.82422L71.8695 449.138H72.3695V448.638V233.591L167.126 448.839L167.257 449.138H167.583H239.001H239.803L239.45 448.418L124.94 215.233L235.918 1.23018L236.296 0.5H235.474H165.82H165.499L165.365 0.79138L72.3695 203.347V1V0.5H71.8695H1.82422H1.32422V1V448.638Z"
      stroke="white"
    />
  </svg>
);

export default LetterK1;
