import React, { useState, useContext } from 'react';
import UserContext from '../../../contexts/UserContext';
import { Link, useHistory } from 'react-router-dom';
import { StatusCode } from 'status-code-enum';
import Logo from '../../shared/Logo';
import Main from '../../shared/Main';
import Form from '../../shared/Form';
import Button from '../../shared/Button'

import { signUp } from '../../../services/trackit.services';
//adminlson@admin.com
const SignUp = () => {
    const history = useHistory();
    const [form, setForm] = useState({email: '', password: '', name: '', image: ''});
    const [loading, setLoading] = useState(false);
    const user = useContext(UserContext);

    if (user.token) {
        history.push('/habitos');
    }


    const createAccount = (e) => {
        e.preventDefault();
        setLoading(true);

        signUp({...form})
            .then((res) => {
                alert("Conta criada com sucesso");
                history.push('/');
                setLoading(false);
            })
            .catch((error) => {
                console.log(error.response);
                const statusCode = error.response.status;

                if (statusCode === StatusCode.ClientErrorConflict){
                    alert("Este email já está cadastrado.");
                    setForm({ ...form, email: '' });
                } else if (statusCode === StatusCode.ClientErrorUnprocessableEntity) {
                    alert("Dados inválidos.");
                } else {
                    alert("Ocorreu um erro ao tentar criar a conta.");
                }
                setLoading(false);
            });
    }

    return (
        <Main paddingTop="68px">
            <Logo />
            <Form onSubmit={createAccount} >
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
                    minLength="6"
                    maxLength="64"
                    placeholder="senha"
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    value={form.password}
                    required
                />
            
                <input
                    disabled={loading}
                    type="text"
                    placeholder="nome"
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    value={form.name}
                    required
                />

                <input 
                    disabled={loading}
                    type="url" 
                    placeholder="foto" 
                    onChange={(e) => setForm({ ...form, image: e.target.value })}
                    value={form.image}
                    required
                />

                <Button
                    loading={loading}
                    type="submit"
                    height="45px"
                >
                    Cadastrar 
                </Button>
            </Form>

            <Link className="styledAnchor" to="/">
                Já tem uma conta? Faça login!
            </Link>
        </Main>
    )
}

export default SignUp;