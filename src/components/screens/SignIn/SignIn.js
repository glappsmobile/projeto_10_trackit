import React, { useState, useContext } from 'react';
import UserContext from '../../../contexts/UserContext';
import { Link, useHistory } from 'react-router-dom';
import { StatusCode } from 'status-code-enum';
import Logo from '../../shared/Logo'
import Main from '../../shared/Main'
import Form from '../../shared/Form'
import Button from '../../shared/Button'
import { signIn } from '../../../services/trackit.services';

const Login = () => {
    const history = useHistory();
    const [form, setForm] = useState({ email: 'adminlson@admin.com', password: 'adminlson@admin.com', });
    const [loading, setLoading] = useState(false);
    const user = useContext(UserContext);
    
    if (user.token){
        history.push('/habitos');
    }

    const SignIn = (e) => {
        e.preventDefault();
        setLoading(true);

        signIn({...form})
            .then((response) => {
                user.setUser(response.data)
                history.push('/habitos');
                setLoading(false);
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
                setLoading(false);
            });
    }

    return (
        <Main paddingTop="68px">
            <Logo />
            <Form onSubmit={SignIn}>
                <input
                    disabled={loading}
                    type="email"
                    placeholder="email"
                    maxLength="64"
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    value={form.email}
                    required
                />

                <input
                    disabled={loading}
                    type="password"
                    maxLength="64"
                    placeholder="senha"
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    value={form.password}
                    required
                />
                <Button
                    loading={loading} 
                    type="submit"
                    height="45px"
                > 
                    Entrar 
                </Button>
            </Form>

            <Link className="styledAnchor" to="/cadastro">
                Não tem uma conta? Cadastre-se!
            </Link>
        </Main>
    )
}

export default Login;