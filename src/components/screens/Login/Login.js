import Logo from '../../shared/Logo'
import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';


const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;

    svg {
        margin-top: 60px;
        margin-bottom: 50px;
    }

    a {
        color: #52B6FF;
        font-size: 14px;
        text-decoration-line: underline;
        margin-top: 25px;
    }
`;

const List = styled.div`
    display: grid;
    grid-row-gap: 10px;
`;

const Login = () => {
    return (
        <LoginContainer>
            <Logo />
            <List>
                <input type="email" placeholder="email" />
                <input type="password" placeholder="senha" />
                <button> Entrar </button>
            </List>

            <Link to="/cadastro"> Não tem uma conta? Cadastre-se! </Link>
        </LoginContainer>
    )
}

export default Login;