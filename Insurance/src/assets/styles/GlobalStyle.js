import { createGlobalStyle } from "styled-components";

import Fonts from "@styles/fonts";

const GlobalStyle = createGlobalStyle`

${Fonts}


html{
  box-sizing: border-box;
  width: 100%;
  scroll-behavior: smooth;
  font-size:16px;
}

a:hover{
    color: hsl(270, 9%, 17%) !important;
    font-weight:1000;
}
body{
  margin:0px;
  margin-top:10px;
  background-color: hsl(0, 0%, 98%); 
}
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

`


export default GlobalStyle;