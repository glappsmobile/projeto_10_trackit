import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body {
    background-color: tomato;
  }

  button {
    height: 45px;
    background: #52B6FF;
    border: none;
    border-radius: 4.63636px;
    color: #FFFFFF;
    font-size: 21px;
  }

  input {
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 20px;
    color: red;

    &::-webkit-input-placeholder { /* WebKit, Blink, Edge */
      font-size: inherit;
      color: inherit;
    }

    }
    &:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
      font-size: inherit;
      color: inherit;
      opacity: 1;
    }

    &::-moz-placeholder { /* Mozilla Firefox 19+ */
      font-size: inherit;
      color: inherit;
      opacity: 1
    }

    &:-ms-input-placeholder { /* Internet Explorer 10-11 */
      font-size: inherit;
      color: inherit;
    }

    &::-ms-input-placeholder { /* Microsoft Edge */
      font-size: inherit;
      color: inherit;
    }

    &::placeholder {
      font-size: inherit;
      color: inherit;
    }
`;

export default GlobalStyle;