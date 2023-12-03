import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { THEME } from "@/styles/theme";
import GlobalStyle from "@/styles/GlobalStyle";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={THEME}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
