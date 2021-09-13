import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
        box-sizing: border-box;
  }

  body {
    background-color: #F2F2F2;
    font-family: 'Lexend Deca', sans-serif;
    color: #666666;
    font-size: 18px;
    line-height: 22.47px;
  }

  h1 { 
    width: 100%;
    font-size: 23px;
    color: #126BA5;
  }

  div, form, input {
    width: 100%;
  }


  button:disabled{
    opacity: 0.7;
  }

  input {
    height: 45px;
    background: #FFFFFF;
    font-family: 'Lexend Deca', sans-serif;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 20px;
    padding-left: 11px;
    color: #666666;

    &:disabled {
      background-color: #F2F2F2
    }

    &:invalid {
        border-color: rgba(220, 53, 69, 1);
    }

    &::-webkit-input-placeholder { /* WebKit, Blink, Edge */
      font-size: inherit;
      color: #DBDBDB;
    }

    }
    &:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
      font-size: inherit;
      color: #DBDBDB;
      opacity: 1;
    }

    &::-moz-placeholder { /* Mozilla Firefox 19+ */
      font-size: inherit;
      color: #DBDBDB;
      opacity: 1
    }

    &:-ms-input-placeholder { /* Internet Explorer 10-11 */
      font-size: inherit;
      color: #DBDBDB;
    }

    &::-ms-input-placeholder { /* Microsoft Edge */
      font-size: inherit;
      color: #DBDBDB;
    }

    &::placeholder {
      font-size: inherit;
      color: #DBDBDB;
    }

    input[value=""] {
      border-color: #D5D5D5 !important;
    }

    .styledAnchor {
        color: #52B6FF;
        font-size: 14px;
        text-decoration-line: underline;
        margin-top: 25px;
    }
`;

export default GlobalStyle;