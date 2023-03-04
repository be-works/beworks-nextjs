import React, { memo, useEffect, useState } from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import { StylesHeader } from "../style";
import logo from "src/assets/image/logo.jpg";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa";

interface Props {}

function Header({}: Props) {
  return (
    <StylesHeader>
      <div className="wrap_main_header">
        <Container>
          <div className="header">
            <div className="logo">
              <Link href="/">
                <Image src={logo} alt="logo" />
              </Link>
            </div>

            <div className="open_menu">
              Menu <FaBars />
            </div>
          </div>
        </Container>
      </div>
    </StylesHeader>
  );
}

export default memo(Header);
