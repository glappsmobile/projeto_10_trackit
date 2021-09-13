import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { StatusCode } from 'status-code-enum';
import Logo from '../../shared/Logo'
import Main from '../../shared/Main'
import Form from '../../shared/Form'
import { signIn } from '../../../services/trackit.services';

const Login = () => {

    const [form, setForm] = useState({ email: '', password: '', });

    const SignIn = (e) => {
        e.preventDefault();
        signIn({...form})
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                const statusCode = error.response.status;
                console.log(statusCode, StatusCode.ClientErrorUnauthorized);
                if (statusCode === StatusCode.ClientErrorUnauthorized ||
                    statusCode === StatusCode.ClientErrorUnprocessableEntity) {
                    alert("Login ou senha incorretos.");
                } else {
                    alert("Ocorreu um erro ao tentar entrar na sua conta.");
                }
            });
    }

    return (
        <Main>
            <Logo />
            <Form onSubmit={SignIn}>
                <input
                    type="email"
                    placeholder="email"
                    maxLength="64"
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    value={form.email}
                    required
                />

                <input
                    type="password"
                    minLength="6"
                    maxLength="64"
                    placeholder="senha"
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    value={form.password}
                    required
                />
                <button type="submit"> Entrar </button>
            </Form>

            <Link className="styledAnchor" to="/cadastro">
                Não tem uma conta? Cadastre-se!
            </Link>
        </Main>
    )
}

export default Login;