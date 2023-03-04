import React, { CSSProperties } from "react";

type IconType = {
  style?: CSSProperties | undefined;
  className?: string | undefined;
};

const LetterW1: React.FC<IconType> = (props) => (
  <svg
    {...props}
    width="376"
    height="450"
    viewBox="0 0 376 450"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M224.224 448.709L224.285 449.138H224.719H307.275H307.706L307.77 448.712L374.549 1.07377L374.634 0.5H374.054H295.901H295.455L295.404 0.942997L261.732 294.374L221.178 0.931551L221.118 0.5H220.683H155.372H154.936L154.876 0.931551L114.323 294.374L80.6502 0.942997L80.5993 0.5H80.1534H2H1.42035L1.50541 1.07338L67.9175 448.711L67.9808 449.138H68.4121H151.335H151.769L151.83 448.709L188.027 195.105L224.224 448.709Z"
      stroke="white"
    />
  </svg>
);

export default LetterW1;
