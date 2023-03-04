import { mixinsFlexSpaceBetween } from "src/styles/mixins";
import styled from "styled-components";

const SHome = styled.div``;

export default SHome;

export const SBanner = styled.div`
  position: relative;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  .banner {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #59089e;
    display: flex;
    align-items: center;
    justify-content: center;

    .banner_content {
      position: absolute;
      bottom: 100px;
      left: 0;
      right: 0;
      width: 100%;
    }

    .banner_letters_wrap {
      display: flex;
    }
  }
`;
