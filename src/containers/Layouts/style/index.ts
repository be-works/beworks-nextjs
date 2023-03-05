import { mixinsFlexSpaceBetween } from "src/styles/mixins";
import styled from "styled-components";

const WrapLayout = styled.div`
  padding-top: 100px;
`;

export default WrapLayout;

export const StylesHeader = styled.div`
  .wrap_main_header {
    .header {
      ${mixinsFlexSpaceBetween};
      position: fixed;
      top: 60px;
      left: 80px;
      right: 80px;
      z-index: 110;
      flex-direction: row;

      .logo {
        height: 30px;
        padding-right: 15px;

        .logo_main {
          width: 100%;
          height: 100%;
        }
      }

      .open_menu {
        color: #fff;
        font-family: "Geomanist Book", sans-serif;
        font-weight: 400;
        font-style: normal;
        padding-right: 8px;
        transition: all 0.2s ease-in-out;

        display: flex;
        align-items: center;

        span {
          margin-right: 10px;
        }
      }
    }
  }
`;

export const StylesFooter = styled.div`
  margin-top: 30px;
`;
