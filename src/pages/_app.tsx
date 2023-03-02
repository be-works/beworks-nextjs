import "src/styles/globals.css";
import type { AppProps } from "next/app";

import { BaseCSS, GridThemeProvider } from "styled-bootstrap-grid";

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
      <>
        <Component {...pageProps} />

        <BaseCSS />
      </>
    </GridThemeProvider>
  );
}
