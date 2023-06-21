import React, {useState} from 'react';
import Input from '../Input';
import Button from '../Button';

import {Link, useNavigate} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import './login.css';

function Login(){

    const {Signin} = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    function handleLogin(){
        if(!email | !senha){
            setError("Preencha todos os campos");
            return;
        }

        const res = Signin(email, senha);
        if(res){
            setError(res);
            return;
        }

        navigate('/home');
    }


    return(
        <div className="loginContainer">
            <div className="loginLabel">SISTEMA DE LOGIN</div>
            <div className="loginContent">
                <Input
                type="email"
                placeholder="Digite seu E-mail"
                value={email}
                onChange={(e) => [setEmail(e.target.value), setError("")]}
                />
                <Input
                type="password"
                placeholder="Digite sua Senha"
                value={senha}
                onChange={(e) => [setSenha(e.target.value), setError("")]}
                />
                <label className="loginLabelError">{error}</label>
                <Button className="btn btn-primary" Text="Entrar" onClick={handleLogin} />
                <label className="loginLabelSignup">
                    Não tem uma conta?
                    <strong className="loginStrong">
                        <Link to="/registrar">&nbsp;Registre-se</Link>
                    </strong>
                </label>
            </div>
        </div>
    )
}

export default Login;