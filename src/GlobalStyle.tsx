import { createGlobalStyle } from "styled-components";
import { loginBackground } from "./assets/imgs/index";
import Poppinsttf from './assets/fonts/Poppins-Regular.ttf';
import NoxaBlackotf from './assets/fonts/nexa-black.otf';



export const GlobalStyles = createGlobalStyle`
 *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'poppins';
    src: url(${Poppinsttf}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'nexa-black';
    src:url(${NoxaBlackotf})  format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  html , body {
  margin: 0;
  padding:0;
  height: 100%;
}

#root{
    height: 100%;  
}


html{
  font-size: calc(12px +  ( 7 * ( (100vw - 767px) / (1688 - 767) ) ) ) !important; 
  font-family:  "poppins", sans-serif;
  background-position: center;
  background-size: cover;
}
  body {
    font-family: "poppins", Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
    background-image: url(${loginBackground});
  }

  h1,h2,h3,h4,h5,h6,p{
        margin: 0;
    }

    .ant-check{
   
          font-size: ${(props) => props.theme.fontSizes.sm};
          font-weight: 500;
          color: #3c3f42;
    }
    `;
