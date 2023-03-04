import React, { CSSProperties } from "react";

type IconType = {
  style?: CSSProperties | undefined;
  className?: string | undefined;
};

const LetterB1: React.FC<IconType> = (props) => (
  <svg
    {...props}
    width="237"
    height="450"
    viewBox="0 0 237 450"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M-0.5 448.638V449.138H0H116.373C150.165 449.138 178.03 438.224 199.923 415.737C223.806 391.961 235.722 359.208 235.722 317.544C235.722 269.122 218.062 235.164 183.164 215.807C195.349 206.795 205.571 193.455 212.902 176.416C220.358 159.085 224.332 139.833 224.332 119.304C224.332 82.7556 213.902 53.842 192.992 32.6251C172.579 11.4095 144.71 0.5 109.935 0.5H0H-0.5V1V448.638ZM147.696 354.937L147.688 354.946C138.379 365.702 126.635 370.761 112.411 370.761H70.3237V255.375H112.411C126.636 255.375 138.39 260.435 147.702 269.926C157.503 280.687 162.422 294.625 162.422 312.428C162.422 330.235 157.501 344.175 147.696 354.937ZM70.3237 181.474V79.5169H108.45C121.692 79.5169 131.949 83.9428 139.767 92.7764C148.088 102.257 152.023 114.28 152.023 129.536C152.023 144.798 148.084 157.458 139.767 166.936C131.429 176.436 121.656 181.474 109.44 181.474H70.3237Z"
      stroke="white"
    />
  </svg>
);

export default LetterB1;