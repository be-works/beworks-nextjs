import type { AppProps } from "next/app";

import "sweetalert2/dist/sweetalert2.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ThemeProvider } from "styled-components";
import { BaseCSS, GridThemeProvider } from "styled-bootstrap-grid";
import Layouts from "src/containers/Layouts";
import theme from "src/styles/theme";
import { GlobalStyle } from "src/styles/global-styles";

const gridTheme = {
  gridColumns: 12,
  breakpoints: {
    xxl: 1440,
    xl: 1200,
    lg: 992,
    md: 768,
    sm: 576,
    xs: 575,
  },
  row: {
    padding: 10,
  },
  col: {
    padding: 15, // default 15
  },
  container: {
    padding: 0,
    maxWidth: {
      xxl: 1141,
      xl: 1140,
      lg: 960,
      md: 720,
      sm: 540,
      xs: 540,
    },
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GridThemeProvider gridTheme={gridTheme}>
      <ThemeProvider theme={theme}>
        <Layouts>
          <Component {...pageProps} />
        </Layouts>

        <GlobalStyle />
        <BaseCSS />
      </ThemeProvider>
    </GridThemeProvider>
  );
}
