import { css } from "@emotion/react";

export const globalStyle = css`
  /* Reset & Base Styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    /* Color Palette */
    --black-color-shade-1: #39546a;
    --black-color-shade-2: #273948;

    --gray-color-shade-1: #ffffff;
    --gray-color-shade-2: #f0f4f4;
    --gray-color-shade-3: #e6eced;

    --blue-color-shade-1: #f2fafd;
    --blue-color-shade-2: #cbeaf6;
    --blue-color-shade-3: #a0d8ee;
    --blue-color-shade-4: #77c7e6;
    --blue-color-shade-5: #4ab4de;
    --blue-color-shade-6: #2495c2;

    --green-color-shade-1: #eafbf5;
    --green-color-shade-2: #c0f2e1;
    --green-color-shade-3: #98e9ce;
    --green-color-shade-4: #5ca490;

    --blue-green-color-shade-1: #9dcbcd;
    --blue-green-color-shade-2: #46878b;
    --blue-green-color-shade-3: #366668;



    /* Typography */
    --font-family: "Mukta", sans-serif;
    --font-size-base: 16px;
    --line-height-base: 1.6;
    --line-height-heading: 1.3;

    --transition-speed: 0.2s;
  }

  /* Global Typography */
  body {
    font-family: var(--font-family);
    font-size: var(--font-size-base);
    line-height: var(--line-height-base);
    background-color: var(--blue-color-shade-1) !important;
    color: var(--black-color-shade-2) !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: var(--line-height-heading);
    font-weight: 600;
  }

  a {
    text-decoration: none;
    color: var(--black-color-shade-2);
  }
  a:hover {
    text-decoration: underline;
  }


  /* Images & Media */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Scroll Behavior */
  html {
    scroll-behavior: smooth;
  }

  /* Accessibility Enhancements */
  [hidden] {
    display: none !important;
  }
  [disabled] {
    cursor: not-allowed;
  }

  /* Selection Highlight */
  ::selection {
    background: var(--blue-color-shade-3);
    color: var(--black-color-shade-2);
  }
`;

export const primaryButtonStyle = {
  whiteSpace: "nowrap",
  backgroundColor: "var(--blue-color-shade-6)",
  color: "var(--gray-color-shade-1)",
  border: "2px solid var(--blue-color-shade-6)",
  padding: "12px 24px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  cursor: "pointer",
  borderRadius: "12px",
  textDecoration: "none !important",
  transition: "background-color var(--transition-speed)",
  "&:hover": {
    backgroundColor: "transparent",
  }
}
export const secondaryButtonStyle = {
  whiteSpace: "nowrap",
  backgroundColor: "transparent",
  color: "var(--gray-color-shade-1)",
  border: "2px solid var(--gray-color-shade-1)",
  padding: "12px 24px",
  textAlign: "center",
  textDecoration: "none !important",
  display: "inline-block",
  cursor: "pointer",
  borderRadius: "12px",
  transition: "background-color var(--transition-speed), color var(--transition-speed)",
  "&:hover": {
    backgroundColor: "var(--gray-color-shade-1)",
    color: "var(--black-color-shade-2)",
  }
}

export const primaryCircleButtonStyle = {
  whiteSpace: "nowrap",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "100%",
  width: "52.54px",
  height: "52.54px",
  backgroundColor: "var(--blue-green-color-shade-3)",
  border: "2px solid var(--blue-green-color-shade-3)",
  color: "var(--gray-color-shade-1)",
  padding: "12px",
  textDecoration: "none",
  cursor: "pointer",
  textDecoration: "none !important",
  transition: "background-color var(--transition-speed)",
  "&:hover": {
    backgroundColor: "transparent",
  }
}

export const secondaryCircleButtonStyle = {
  whiteSpace: "nowrap",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "100%",
  width: "52.54px",
  height: "52.54px",
  backgroundColor: "transparent",
  border: "2px solid var(--black-color-shade-2)",
  color: "var(--gray-color-shade-1)",
  padding: "12px",
  textDecoration: "none",
  cursor: "pointer",
  textDecoration: "none !important",
  transition: "background-color var(--transition-speed), border-color var(--transition-speed)",
  "&:hover": {
    backgroundColor: "var(--black-color-shade-1)",
    borderColor: "var(--black-color-shade-1)",
  }
}

export const plainButtonStyle = {
  backgroundColor: "transparent",
  color: "var(--black-color-shade-2)",
  border: "none",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  cursor: "pointer",
  transition: "color var(--transition-speed)",
  "&:hover": {
    color: "var(--blue-color-shade-6)",
    textDecoration: "underline",
  }
}