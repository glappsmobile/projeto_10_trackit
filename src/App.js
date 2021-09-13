import './reset.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/screens/SignIn/SignIn';
import Register from './components/screens/SignUp/SignUp';
import Habits from './components/screens/Habits/Habits';
import Today from './components/screens/Today/Today';
import styled from "styled-components";
import GlobalStyle from './styles/global';
import UserContext from './contexts/UserContext';

function App() {
  const [user, setUser] = useState({})
  return (
    <StyledApp>
      <GlobalStyle />
      <BrowserRouter>
        <UserContext.Provider value={{...user, setUser}}>
          {user.token && (
            <Header image='https://s2.glbimg.com/UDwdpwlMblPVckJDOJxhdTf48hQ=/e.glbimg.com/og/ed/f/original/2019/11/01/chines1.jpg' />
          )}
          <Switch>
            <Route path ={"/"} component={Login} exact />
            <Route path={"/cadastro"} component={Register} exact />
            <Route path={"/habitos"} component={Habits} exact />
            <Route path={"/hoje"} component={Today} exact />
          </Switch>
          {user.token && (
            <Footer />
          )}
        </UserContext.Provider>
      </BrowserRouter>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  &>div {
    margin: auto;
  }
`;

export default App;
