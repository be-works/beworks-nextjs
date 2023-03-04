import { mixinsFlexSpaceBetween } from "src/styles/mixins";
import styled from "styled-components";

const WrapLayout = styled.div``;

export default WrapLayout;

export const StylesHeader = styled.div`
  .wrap_main_header {
    .header {
      ${mixinsFlexSpaceBetween};

      .logo {
        img {
          width: 250px;
          height: auto;
          padding-right: 15px;
        }
      }
    }
  }
`;

export const StylesFooter = styled.div`
  margin-top: 30px;
  .fb_and_support {
    border-top: 1px solid coral;
    margin-bottom: 20px;
    .fb_and_support_item {
      .title {
        color: red;
        font-size: 25px;
        margin: 15px 0;
      }
    }
  }

  .partner {
    display: block;

    .partner_title {
      b {
        color: red;
        font-size: 20px;
      }
    }

    img {
      padding: 20px 20px 20px 20px;
      width: 100px;
      height: 80px;
    }
  }

  .line {
    width: 100%;
    height: 3px;
    border: solid 1px red;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-bottom: 20px;
  }

  .connect {
    background-color: #365899;
    padding: 10px 0;
    .connect_item {
      margin-bottom: 25px;
      p {
        margin: 0;
        color: white;
        font-size: 13px;
      }

      .title {
        font-weight: bold;
        margin-bottom: 5px;
      }

      .content {
        margin-bottom: 5px;
      }
    }

    .infor_item {
      .infor_title {
        color: white;
        size: 19px;
      }

      .infor_content {
        a {
          text-decoration: unset;
          p {
            font-size: 16px;
            color: white;
            margin: 10px 0;
          }
        }
      }
    }

    .support {
      .support_content {
        .support_content_item {
          margin-top: 0;
          margin-bottom: 1rem;
          font-size: 16px;
          color: white;

          b {
            color: white;
            margin-bottom: 10px;
            cursor: pointer;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1199px) {
  }
`;
