import React from "react";
import App from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { defaultTheme } from "../theme/theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: Helvetica, sans-serif;
    background-color: ${(props) => props.theme.PAGE_BG};
    }
`;

const client = new ApolloClient({
  uri: "http://localhost:3333/graphql",
  cache: new InMemoryCache(),
});

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ApolloProvider client={client}>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles />
          <ToastContainer />
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}

export default MyApp;
