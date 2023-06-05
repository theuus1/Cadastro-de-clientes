import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    font-family: 'poppins', sans-serif;
  }
  
  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background: no-repeat center/100% url(https://th.bing.com/th/id/R.1b9f691fc7bcac39cf48744692f13811?rik=vSBpUtNaY0wynA&pid=ImgRaw&r=0);
  }
`;

export default Global;