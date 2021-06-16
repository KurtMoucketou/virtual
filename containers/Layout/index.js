import React from "react";
import { ThemeProvider } from "styled-components";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";

import { GlobalCSS } from "../../public/styles/style";

import { theme } from "../../theme";
import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";

const Layout = ({ children, ...props }) => {
  return (
    <ThemeProvider theme={theme}>
    <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://use.typekit.net/pgv8psy.css" />
        <link rel="shortcut icon" href="/img/favicon.ico" />
      </Head>
      <GlobalCSS />
      <Header />
      {children}
      <Footer />
      </ThemeProvider>
  );
};

export default Layout;
