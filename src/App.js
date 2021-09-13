import './reset.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/screens/SignIn/SignIn';
import Register from './components/screens/SignUp/SignUp';
import Habits from './components/screens/Habits/Habits';
import Today from './components/screens/Today/Today';
import History from './components/screens/History/History';
import styled from "styled-components";
import GlobalStyle from './styles/global';
import UserContext from './contexts/UserContext';

function App() {
  const [user, setUser] = useState({});
  const [rate, setRate] = useState(0);

  return (
    <StyledApp>
      <GlobalStyle />
      <BrowserRouter>
        <UserContext.Provider value={{...user, setUser, rate, setRate}}>
          {user.token && (
            <Header image={user.image} />
          )}
          <Switch>
            <Route path ={"/"} component={Login} exact />
            <Route path={"/cadastro"} component={Register} exact />
            <Route path={"/habitos"} component={Habits} exact />
            <Route path={"/hoje"} component={Today} exact />
            <Route path={"/historico"} component={History} exact />

          </Switch>
          {user.token && (
            <Footer rate={rate} />
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
