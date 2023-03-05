import styled from "styled-components";
import bg from "../../../assets/image/system/bfn.png";

const SHome = styled.div``;

export default SHome;

export const SBanner = styled.div`
  position: relative;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin-top: -100px;
  background-color: #59089e;

  .banner {
    position: relative;
    width: 100%;
    height: 100%;
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
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      .banner_letters {
        width: 15%;
        height: auto;

        .letter_item {
          width: 100%;
        }

        .letter_item_1 {
        }

        .letter_item_2 {
          display: none;
        }
      }
    }
  }
`;

export const SSystem = styled.div`
  .section-system {
    background-image: url(${require('../../../assets/image/system/bfn.png')});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
    padding-top: 150px;
    padding-bottom: 78px;
    overflow: hidden;

    .module-system {
      padding-top: 64px;

      .module-header .title {
        margin: 0;
        text-align: center;
        font-family: "avo_bold";
        color: #26c380;
        text-transform: uppercase;
        font-size: 34px;
      }
      .module-content {
        padding-top: 227px;
        position: relative;
        z-index: 1;
        .system-content {
          .system-img {
            width: 843px;
            margin-left: 199px;
            margin-right: auto;
            position: relative;
            z-index: 1;
            img {
              width: 100%;
            }
            .system-run {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              z-index: -1;
              .run {
                position: absolute;
                width: 0.7%;
                height: 1%;
                background: #37c2c1;
                border: 1px solid #37c2c1;
                border-radius: 20px;
                box-shadow: 0 0 2px #37c2c1;
              }
              .run1 {
                top: 33.9%;
                right: 22%;
                animation: system_run1 2s linear infinite;
                animation-direction: alternate;
                @keyframes system_run1 {
                  0% {
                    right: 22%;
                    top: 33.9%;
                  }
                  25% {
                    right: 13%;
                    top: 41.5%;
                  }
                  75% {
                    right: 35%;
                    top: 58%;
                  }
                  100% {
                    right: 48%;
                    top: 45%;
                  }
                }
              }
              .run1-1 {
                top: 31.6%;
                right: 19%;
                animation: system_run1_1 3s linear infinite;
                animation-direction: alternate-reverse;
                animation-delay: 0.3s;
                @keyframes system_run1_1 {
                  0% {
                    top: 31.6%;
                    right: 19%;
                  }
                  50% {
                    top: 47%;
                    right: -0.5%;
                  }
                  100% {
                    top: 81%;
                    right: 43%;
                  }
                }
              }
              .run2 {
                top: 87.1%;
                right: 39.7%;
                animation: system_run2 3s linear infinite;
                animation-direction: alternate-reverse;
                animation-delay: 0.4s;
                @keyframes system_run2 {
                  0% {
                    top: 87.1%;
                    right: 39.7%;
                  }
                  15% {
                    top: 92.5%;
                    right: 33.5%;
                  }
                  30% {
                    top: 99%;
                    right: 42%;
                  }
                  60% {
                    top: 83%;
                    right: 63%;
                  }
                  90% {
                    top: 63.5%;
                    right: 40.5%;
                  }
                  100% {
                    top: 55%;
                    right: 49%;
                  }
                }
              }
              .run2-1 {
                top: 78.6%;
                right: 39.5%;
                animation: system_run2_1 3s linear infinite;
                animation-direction: alternate-reverse;
                @keyframes system_run2_1 {
                  0% {
                    top: 78.6%;
                    right: 39.5%;
                  }
                  50% {
                    top: 47%;
                    right: 0%;
                  }
                  100% {
                    top: 31%;
                    right: 19.5%;
                  }
                }
              }
              .run3 {
                top: 56.5%;
                left: 6.2%;
                animation: system_run3 2s linear infinite;
                animation-direction: alternate-reverse;
                animation-delay: 0.8s;
                @keyframes system_run3 {
                  0% {
                    left: 6.2%;
                    top: 56.5%;
                  }
                  25% {
                    left: 0%;
                    top: 61.7%;
                  }
                  50% {
                    left: 10.5%;
                    top: 72%;
                  }
                  100% {
                    left: 40%;
                    top: 50%;
                  }
                }
              }
              .run4 {
                top: 12.6%;
                left: 20%;
                animation: system_run4 2s linear infinite;
                animation-direction: alternate-reverse;
                animation-delay: 1.2s;
                @keyframes system_run4 {
                  0% {
                    top: 12.6%;
                    left: 20%;
                  }
                  50% {
                    top: 20%;
                    left: 11%;
                  }
                  100% {
                    top: 40%;
                    left: 37%;
                  }
                }
              }
            }

            .layer-server {
              position: absolute;
              top: 2.3%;
              width: 32.6%;
              left: 29%;
              cursor: pointer;
              animation: system_server 1s ease infinite alternate;
              @keyframes system_server {
                from {
                  transform: translateY(-5px);
                }
                to {
                  transform: translateY(2px);
                }
              }
              .server__top {
                position: absolute;
                width: 31%;
                top: -7%;
                left: 33%;
                animation: linear system_server_top infinite 1.5s;
                @keyframes system_server_top {
                  from {
                    transform: rotate(360deg);
                  }
                  to {
                    transform: rotate(0deg);
                  }
                }
              }
              .server__arrow {
                position: absolute;
                top: 0.5%;
                width: 12%;
                left: 42.5%;
                animation: linear system_server_arrow infinite 1.5s;
              }
              .layer__title {
                position: absolute;
                font-family: "avo_bold";
                color: #fff;
                top: -14%;
                right: 8%;
                font-size: 16px;
                text-align: center;
                white-space: nowrap;
              }
            }
            .layer {
              position: absolute;
              width: 16.4%;
              display: block;
              cursor: pointer;
              animation: system_layer 1s ease infinite alternate;
              @keyframes system_layer {
                from {
                  transform: translateY(-5px);
                }
                to {
                  transform: translateY(0px);
                }
              }
              .client__point {
                position: absolute;
                width: 5%;
              }
              .client__point1 {
                top: 18%;
                left: 54%;
                animation: client__point1 1s linear infinite;
                @keyframes client__point1 {
                  0% {
                    opacity: 1;
                  }
                  50% {
                    opacity: 1;
                  }
                  75% {
                    opacity: 1;
                  }
                  85% {
                    opacity: 0;
                  }
                  100% {
                    opacity: 1;
                  }
                }
              }
              .client__point2 {
                top: 23%;
                left: 48.1%;
                animation: client__point2 1s linear infinite;
                @keyframes client__point2 {
                  0% {
                    opacity: 1;
                  }
                  50% {
                    opacity: 1;
                  }
                  75% {
                    opacity: 0;
                  }
                  85% {
                    opacity: 1;
                  }
                  100% {
                    opacity: 1;
                  }
                }
              }
              .client__point3 {
                top: 28%;
                left: 42.1%;
                animation: client__point3 1s linear infinite;
                @keyframes client__point3 {
                  0% {
                    opacity: 1;
                  }
                  50% {
                    opacity: 0;
                  }
                  75% {
                    opacity: 1;
                  }
                  85% {
                    opacity: 1;
                  }
                  100% {
                    opacity: 1;
                  }
                }
              }
              .layer__top {
                @keyframes system_layer_top {
                  0% {
                    transform: scale(1);
                  }
                  20% {
                    transform: scale(1.05);
                  }
                  40% {
                    transform: scale(1.08);
                  }
                  50% {
                    transform: scale(1.11);
                  }
                  60% {
                    transform: scale(1.08);
                  }
                  80% {
                    transform: scale(1.05);
                  }
                  100% {
                    transform: scale(1);
                  }
                }
                animation: system_layer_top linear infinite 2s;
              }
              .layer__title {
                position: absolute;
                font-family: "avo_bold";
                color: #fff;
                font-size: 16px;
                text-align: center;
                span {
                  display: block;
                  white-space: nowrap;
                }
              }
            }
            .layer1 {
              top: 14%;
              right: 18.3%;
              .layer__top {
                position: absolute;
                top: -16%;
                width: 53%;
                left: 22%;
              }

              .layer__title {
                top: -13%;
                left: 102%;
              }
            }
            .layer2 {
              bottom: 14%;
              left: 47%;
              .layer__top {
                position: absolute;
                top: -26%;
                width: 42%;
                left: 27%;
              }
              .layer__title {
                top: 17%;
                left: 153%;
              }
            }
            .layer3 {
              bottom: 44%;
              left: 4%;
              .layer__top {
                position: absolute;
                top: -31%;
                width: 44%;
                left: 26.5%;
              }
              .layer__title {
                white-space: nowrap;
                top: 8%;
                left: -77%;
              }
            }
            .layer4 {
              top: -7%;
              left: 17%;
              .layer__top {
                position: absolute;
                top: -33%;
                width: 41%;
                left: 22%;
              }
              .layer__title {
                white-space: nowrap;
                top: -28%;
                left: -83%;
              }
            }
          }
        }
        .system-text {
          .system-item {
            position: absolute;
            width: 320px;
            padding: 21px 20px;
            color: #fff;
            z-index: 10;
            box-shadow: 0 0 20px #00fbcf;
            background: #000b22;
            border-radius: 15px;
            display: none;
            .head .title {
              font-family: "avo_bold";
              font-size: 16px;
              margin-bottom: 16px;
              display: table;
              text-align: center;
            }
            .content {
              padding-bottom: 5px;
              .desc {
                font-size: 14px;
                text-align: justify;
                line-height: 21px;
                margin: 0;
              }
            }
            &:hover {
              display: block !important;
            }
          }
          .system-item:nth-child(1) {
            right: 31px;
            top: 642px;
            .system__arrow {
              position: absolute;
              top: 17px;
              left: -35px;
            }
            &::before {
              content: "";
              width: 100%;
              height: 100%;
              display: block;
              position: absolute;
              left: -100px;
              top: 0;
            }
            &::after {
              transform: translateX(-100px);
              opacity: 0;
            }
          }
          .system-item:nth-child(2) {
            right: -50px;
            top: 274px;
            .system__arrow {
              position: absolute;
              top: 75px;
              left: -28px;
            }
            &::after {
              transform: translateX(-100px);
              opacity: 0;
            }
          }
          .system-item:nth-child(3) {
            left: 55px;
            top: 136px;
            .head .title {
              margin-left: auto;
            }
            .system__arrow {
              position: absolute;
              top: 79px;
              right: -35px;
              transform: rotate(180deg);
            }
            &::after {
              transform: translateX(100px);
              opacity: 0;
            }
          }
          .system-item:nth-child(4) {
            left: -81px;
            top: 458px;
            .system__arrow {
              position: absolute;
              top: 47px;
              right: -35px;
              transform: rotate(180deg);
            }
            .head .title {
              margin-left: auto;
            }
            &::after {
              transform: translateX(100px);
              opacity: 0;
            }
          }
          .system-item:nth-child(5) {
            top: 175px;
            left: 577px;
            .system__arrow {
              position: absolute;
              top: 139px;
              left: -29px;
            }
            &:after {
              transform: translateX(100px);
              opacity: 0;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 1199px) {
    .section-system .module-system .module-content .system-content {
      width: 100%;
      margin-left: 0;
      .system-img {
        margin-left: auto;
        margin-right: auto;
      }
    }
  }

  @media screen and (max-width: 991px) {
    .section-system .module-system .module-content .system-content {
      .system-img {
        width: 100%;
        .layer4 .layer__title {
          left: -97%;
        }
        .layer3 .layer__title {
          top: -58%;
          left: -14%;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    .section-system .module-system {
      .module-content {
        .system-content {
          .system-img {
            .layer .layer__title {
              font-size: 2vw;
            }
            .layer-server .layer__title {
              font-size: 2.5vw;
              right: -10%;
            }
          }
        }
        .system-text {
          padding-top: 20px;
          .system-item {
            position: relative;
            display: block;
            width: 100%;
            margin-bottom: 20px;
            .system__arrow {
              display: none;
            }
          }
          .system-item:nth-child(1) {
            display: block;
            right: 0px;
            top: 0px;
          }
          .system-item:nth-child(2) {
            display: block;
            right: 0;
            top: 0;
          }
          .system-item:nth-child(3) {
            .head .title {
              margin-left: 0;
            }
            display: block;
            left: 0;
            top: 0;
          }
          .system-item:nth-child(4) {
            .head .title {
              margin-left: 0;
            }
            display: block;
            left: 0;
            top: 0;
          }
          .system-item:nth-child(5) {
            display: block;
            top: 0;
            left: 0;
          }
        }
      }
    }
  }

  @media screen and (max-width: 479px) {
    .section-system .module-system {
      padding-top: 45px;
      .module-header .title {
        font-size: 27px;
      }
      .module-content {
        padding-top: 70px;
        .system-content .system-img {
          .system-item {
            .text {
              width: 230px;
              .title {
                font-size: 9px;
              }
            }
            .img img {
              width: 30px;
            }
          }

          .system-item1 {
            top: -8.7%;
            left: -50.3%;
          }
          .system-item2 {
            top: 2%;
            left: -1.9%;
            .img img {
              width: 45px;
            }
          }
          .system-item3 {
            top: 33.5%;
            left: -33.6%;
          }
          .system-item4 {
            top: 17%;
            right: -9%;
            .text .title {
              right: 1%;
              left: 52%;
              top: -26%;
            }
          }
          .system-item5 {
            right: 10.5%;
            bottom: 22%;
          }
        }
      }
    }
  }
`;
