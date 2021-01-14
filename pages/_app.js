import "../styles/globals.css";
import { ChakraProvider, CSSReset, Global } from "@chakra-ui/react";
import customTheme from "../themes/theme";
import "../styles/fonts.css";
import "babel-polyfill";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
