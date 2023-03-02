import styled from "styled-components";

const WrapLayout = styled.div``;

export default WrapLayout;

export const StylesHeader = styled.div`
  .wrap_all_col_top {
    background-color: #365899;
    padding: 3px 20px;

    .wrap_in_col {
      a {
        text-decoration: unset;
        text-decoration: none;
        color: #f2f2f2;
        font-size: 14px;
      }
    }

    .wrap_in_col_center,
    .wrap_in_col_right {
      display: flex;
      margin: 0 -10px;

      .wrap_in_col_little {
        margin: 0 10px;
      }

      .wrap_in_col_little_after_login {
        position: relative;

        .user_name {
          color: #f2f2f2;
          font-size: 14px;
          cursor: pointer;
        }

        .user_name_hover {
          display: none;
          position: absolute;
          background-color: white;
          padding: 10px 20px;
          z-index: 10;
          width: 130px;
          border-radius: 4px;
          left: -20px;
          top: 21px;
          border: 1px solid #ccc;

          .user_name_hover_lit {
            cursor: pointer;
            color: black;
            font-size: 14px;
            padding: 10px 0;
            font-weight: bold;

            a {
              color: black;
              font-weight: bold;
            }

            &:hover {
              color: #365899;

              a {
                color: #365899;
              }
            }
          }

          &::before {
            content: "";
            position: absolute;
            clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
            width: 15px;
            height: 10px;
            background-color: white;
            top: -10px;
            transform: translateX(-50%);
            left: 50%;
          }

          &::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 10px;
            background-color: transparent;
            top: -10px;
            transform: translateX(-50%);
            left: 50%;
          }
        }

        &:hover {
          .user_name_hover {
            display: block;
          }
        }
      }

      .wrap_in_col_little_menufactuner {
        position: relative;
        .menufactuner {
          width: 300px;
          padding: 10px;
          border-radius: 4px;
          background-color: white;
          z-index: 10;
          position: absolute;
          display: none;

          .menufactuner_item {
            margin-bottom: 10px;
            border-bottom: 1px solid red;
            p {
              margin: 0 0 10px 0;
            }
          }
        }
        &:hover {
          .menufactuner {
            display: block;
          }
        }
      }
    }
  }

  .wrap_main_header {
    .wrap_main_header_item {
    }

    .logo_and_search {
      display: flex;

      .logo {
        img {
          width: 250px;
          height: auto;
          padding-right: 15px;
        }
      }

      .search {
        margin-top: 15px;
        padding-top: 6px;
        padding-bottom: 6px;
        border: solid 1px #de0b00;
        height: 40px;
        border-radius: 6px;
        flex: 1;
        position: relative;
        z-index: 0;

        .input {
          width: 100%;
          position: relative;
          top: 50%;
          transform: translateY(-50%);
          left: 0;
          z-index: 2;

          .input_text {
            color: black;
            font-size: 15px;
            width: 100%;
            height: 34px;
            border-radius: 3px;
            border: solid 1px #ccc;
            padding: 0 5px;
            outline: none;
            max-width: 100%;
            border: unset;
          }
        }

        .select {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 10px;
          z-index: 3;
        }
      }
    }

    .call_phone_number {
      height: 100%;
      display: flex;
      align-items: center;

      p {
        margin: 0;
        color: red;
        font-size: 17px;

        a {
          font-size: 22px;
          font-weight: bold;
          color: red;
          cursor: pointer;
          text-decoration: underline;
        }
      }
    }

    .card {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      a {
        text-decoration: unset;
        p {
          margin: 0;
          position: relative;

          img {
            width: 30px;
          }

          b {
            position: absolute;
            width: 15px;
            height: 15px;
            font-size: 13px;
            border-radius: 100%;
            background: red;
            color: white;
            text-align: center;
          }
        }
      }

      &:hover {
        a p {
          text-decoration: underline;
        }
      }
    }
  }

  .list_product {
    background-color: #365899;
    border-radius: 3px;
    padding: 3px 0 3px 10px;

    .list_product {
      a {
        text-decoration: unset;
        text-decoration: none;
        color: #ffea01;
        font-size: 14px;
      }
    }

    .list_product_left {
      span {
        color: #ffea01;
      }
    }

    .list_product_center,
    .list_product_right {
      display: flex;

      .list_product_little {
        margin: 0 10px;
      }
    }

    .list_product_right {
      padding: 0;
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;

      .special {
        background-color: #d00;
      }
    }
  }

  @media screen and (max-width: 1199px) {
    .wrap_all_col_top .wrap_in_col_center,
    .wrap_in_col_right {
      margin: 0 5px;
      .wrap_in_col_little {
        margin: 0 5px;
      }
    }
    .list_product {
      .list_product_center {
        display: block;

        .list_product_little {
          display: inline-flex;
        }
      }
    }
  }

  @media screen and (max-width: 991px) {
    .wrap_all_col_top .wrap_in_col_center {
      display: block;
      .wrap_in_col_little {
        display: inline-flex;
        margin: 0 10px;
      }
    }
  }

  @media screen and (max-width: 767px) {
    .wrap_all_col_top {
      .wrap_in_col {
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
      }
      .wrap_in_col_center {
        display: block;
        margin: 0 0 10px;
        text-align: center;
        .wrap_in_col_little {
          margin: 0 20px 10px 0;
        }
      }
    }

    .wrap_main_header {
      .logo_and_search {
        display: block;
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
