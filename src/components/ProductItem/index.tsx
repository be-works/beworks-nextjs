/**
 *
 * ProductItem
 * make by huynq
 */
import { memo } from "react";
import styled from "styled-components";
import img1 from "@/assets/image/detail-pro/1.jpg";
import API_URL from "@/api/url";
import { Alert } from "../Alert";
import Link from "next/link";
import { requestToken } from "@/api/axios";
import { formatNumber } from "src/helpers/formatNumber";

interface Props {
  item: any;
  setChangeCart: any;
  changeCart: any;
}

function ProductItem({ item, setChangeCart, changeCart }: Props) {
  const token = JSON.parse(localStorage.getItem("token") ?? "{}");

  const handleAddToCart = () => {
    requestToken({
      method: "POST",
      url: API_URL.CART.ADD,
      headers: {
        Authorization: `Bearer ${token}`,
        username: JSON.parse(String(localStorage.getItem("usernameLap"))),
        "item-id": item?.id,
      },
    })
      .then((res: any) => {
        if (res?.data?.code < 400) {
          Alert({ name: `Thêm vào giỏ hàng thành công`, icon: "success" });
          setChangeCart(!changeCart);
        } else {
          Alert({ name: `${res?.data?.message}`, icon: "error" });
        }
      })
      .catch((err: any) => {
        Alert({ name: `${err?.data?.message}`, icon: "error" });
      });
  };

  return (
    <WrapProductItem>
      <div className="product_item">
        <Link
          href={`/product/${item?.id}`}
          onClick={() => window.scrollTo(0, 0)}
        >
          <div className="img">
            {item?.images ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={
                  item?.images[0].slice(0, 5) === "https"
                    ? item?.images[0]
                    : img1
                }
                alt=""
              />
            ) : (
              ""
            )}
          </div>
        </Link>
        <p className="name">
          {(item?.name).length < 20 ? item?.name : (item?.name).slice(0, 20)}
        </p>
        <p className="price">Giá niêm miết: {formatNumber(item?.price)} VND</p>
        <p className="discount">
          Giá bán:{" "}
          {formatNumber(Math.abs((item?.price * (100 - item?.discount)) / 100))}{" "}
          VND
        </p>

        <div className="buttons">
          <button className="add_to_cart" onClick={() => handleAddToCart()}>
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </WrapProductItem>
  );
}

export default memo(ProductItem);

const WrapProductItem = styled.div`
  .product_item {
    padding: 5px 20px 20px;
    border: 1px solid grey;
    margin-bottom: 20px;
    height: 355px;

    .img {
      cursor: pointer;
      width: 100%;
      height: 196px;
      margin-bottom: 10px;

      img {
        width: 100%;
      }
    }
    a {
      text-decoration: unset;
    }
    p {
      margin: 0;
    }

    .name {
      font-size: 18px;
      color: black;
      margin-bottom: 10px;
    }

    .price {
      font-size: 16px;
      color: black;
      margin-bottom: 5px;
    }

    .discount {
      font-size: 16px;
      color: red;
      margin-bottom: 20px;
    }

    .buttons {
      display: flex;
      justify-content: center;

      .add_to_cart {
        width: 80%;
        height: 35px;
        background-color: #2269ba;
        color: white;
        font-size: 16px;
        border: unset;
        border-radius: 4px;
        cursor: pointer;
      }
    }
  }
`;
