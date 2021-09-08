import './reset.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './components/screens/Login/Login';
import styled from "styled-components";
import GlobalStyle from './styles/global';

const StyledApp = styled.div`
  &>div {
    margin: auto;
  }
`;
function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path ={"/"} component={Login} exact />
        </Switch>
      </BrowserRouter>
    </StyledApp>
  );
}

export default App;
