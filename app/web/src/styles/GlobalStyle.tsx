import { Global, css } from "@emotion/react";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul,
  ol {
    list-style: none;
  }
`;

export default function GlobalStyle() {
  return <Global styles={globalStyle} />;
}
