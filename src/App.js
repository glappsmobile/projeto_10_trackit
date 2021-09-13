import './reset.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/screens/SignIn/SignIn';
import Register from './components/screens/SignUp/SignUp';
import Habits from './components/screens/Habits/Habits';
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
        <Header image='https://s2.glbimg.com/UDwdpwlMblPVckJDOJxhdTf48hQ=/e.glbimg.com/og/ed/f/original/2019/11/01/chines1.jpg' />
        <Switch>
          <Route path ={"/"} component={Login} exact />
          <Route path={"/cadastro"} component={Register} exact />
          <Route path={"/habits"} component={Habits} exact />
        </Switch>
        <Footer />
      </BrowserRouter>
    </StyledApp>
  );
}

export default App;
