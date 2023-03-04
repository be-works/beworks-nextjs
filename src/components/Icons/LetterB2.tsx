import React, { CSSProperties } from "react";

type IconType = {
  style?: CSSProperties | undefined;
  className?: string | undefined;
};

const LetterB2: React.FC<IconType> = (props) => (
  <svg
    {...props}
    width="236"
    height="448"
    viewBox="0 0 236 448"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 447.638H116.373C150.047 447.638 177.778 436.767 199.567 414.385C223.337 390.724 235.222 358.11 235.222 316.544C235.222 267.943 217.394 234.051 182.235 214.866C194.615 205.914 205.014 192.484 212.442 175.218C219.87 157.952 223.832 138.768 223.832 118.304C223.832 81.8538 213.433 53.0771 192.634 31.9742C172.331 10.8712 144.599 0 109.935 0H0V447.638ZM69.8237 180.974V78.0169H108.45C121.82 78.0169 132.219 82.4933 140.143 91.4461C148.561 101.038 152.523 113.188 152.523 128.536C152.523 143.884 148.561 156.673 140.143 166.266C131.724 175.858 121.82 180.974 109.44 180.974H69.8237ZM69.8237 370.261V253.875H112.411C126.772 253.875 138.657 258.991 148.066 268.583C157.97 279.454 162.922 293.523 162.922 311.428C162.922 329.334 157.97 343.402 148.066 354.274C138.657 365.145 126.772 370.261 112.411 370.261H69.8237Z"
      fill="white"
    />
  </svg>
);

export default LetterB2;
