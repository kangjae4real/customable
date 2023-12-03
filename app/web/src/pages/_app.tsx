import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { THEME } from "@/styles/theme";
import GlobalStyle from "@/styles/GlobalStyle";
import BaseLayout from "@/components/layout/BaseLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={THEME}>
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      </ThemeProvider>
    </>
  );
}
