import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { StatusCode } from 'status-code-enum';
import Logo from '../../shared/Logo';
import Main from '../../shared/Main';
import Form from '../../shared/Form';

import { signUp } from '../../../services/trackit.services';
//adminlson@admin.com
const SignUp = () => {
    const history = useHistory();
    const [form, setForm] = useState({email: '', password: '', name: '', image: ''});
    
    const createAccount = (e) => {
        e.preventDefault();
        console.log(form)

        signUp({...form})
            .then((res) => {
                console.log(res.data);
                alert("Conta criada com sucesso");
                history.push('/');
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

            });
    }

    return (
        <Main>
            <Logo />
            <Form onSubmit={createAccount} >
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
              
                    <input
                        type="text"
                        placeholder="nome"
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        value={form.name}
                        required
                    />

                    <input 
                        type="url" 
                        placeholder="foto" 
                        onChange={(e) => setForm({ ...form, image: e.target.value })}
                        value={form.image}
                        required
                    />

                <button type="submit">Cadastrar </button>
            </Form>

            <Link className="styledAnchor" to="/">
                Já tem uma conta? Faça login!
            </Link>
        </Main>
    )
}

export default SignUp;