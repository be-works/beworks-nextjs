import React, { CSSProperties } from "react";

type IconType = {
  style?: CSSProperties | undefined;
  className?: string | undefined;
};

const LetterR2: React.FC<IconType> = (props) => (
  <svg
    {...props}
    width="236"
    height="448"
    viewBox="0 0 236 448"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 447.638L68.7421 447.638V272.42L100.016 272.42L162.988 447.638H235.222L158.358 251.317C191.233 226.377 207.44 187.368 207.44 133.012C207.44 94.6435 198.179 63.3088 179.194 39.0084C159.284 12.7897 131.965 0 97.7004 0H0V447.638ZM68.7421 196.321V78.0169L92.607 78.0169C107.424 78.0169 119 83.1328 127.798 93.3645C136.132 104.236 140.3 118.304 140.3 136.21C140.3 154.755 135.669 170.102 126.872 180.974C119 191.205 108.35 196.321 95.8482 196.321L68.7421 196.321Z"
      fill="white"
    />
  </svg>
);

export default LetterR2;
