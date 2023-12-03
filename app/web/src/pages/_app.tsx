import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { THEME } from "@/styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={THEME}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
