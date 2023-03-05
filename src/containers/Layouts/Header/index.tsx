import React, { memo, useEffect, useState } from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import { StylesHeader } from "../style";
import logo from "src/assets/image/logo.jpg";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import LogoText from "src/components/Icons/LogoText";

interface Props {}

function Header({}: Props) {
  return (
    <StylesHeader>
      <div className="wrap_main_header">
        <Container>
          <div className="header">
            <div className="logo">
              <Link href="/">
                <LogoText className="logo_main" />
              </Link>
            </div>

            <div className="open_menu">
              <span>Menu</span> <FaBars />
            </div>
          </div>
        </Container>
      </div>
    </StylesHeader>
  );
}

export default memo(Header);
