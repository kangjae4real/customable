import { Global, css } from "@emotion/react";

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
