import { createGlobalStyle } from "styled-components";
import SpoqaHansSansRegular from "./Spoqa Han Sans Regular.ttf";
// import SpoqaHansSansRegular from "./Weird.ttf";

export default createGlobalStyle`
  @font-face {
    font-family: 'Spoqa Han Sans Regular';
    src: url(${SpoqaHansSansRegular}) format('truetype');
  }
`;
