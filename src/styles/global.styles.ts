import { createGlobalStyle } from "styled-components"

import { theme } from "./theme"

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: ${theme.colors.black};
}

body, input, button, select {
    font-family: "Lexend", sans-serif;
}

h1, h2, p, span, button, label, input {
    line-height: 100%;
}

#root {
    max-width: 1280px;
    margin: 0 auto;
}

button {
    cursor: pointer;
}






`
