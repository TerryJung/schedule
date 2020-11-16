import { createGlobalStyle } from "styled-components";
import SpoqaHansSansRegular from "./Spoqa Han Sans Regular.ttf";
// import SpoqaHansSansRegular from "./Weird.ttf";

// TODO: delete every font files except Regular in this folder
export default createGlobalStyle`
  @font-face {
    font-family: 'Spoqa Han Sans Regular';
    src: url(${SpoqaHansSansRegular}) format('truetype');
  }
`;
