import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

import './registrar.css';


function Registrar(){
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [emailConf, setEmailConf] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
  
    const { Signup } = useAuth();

    const handleSignup = () => {
        if (!email | !emailConf | !senha | !nome) {
          setError("Preencha todos os campos");
          return;
        } else if (email !== emailConf) {
          setError("Os e-mails não são iguais");
          return;
        }
    
        const res = Signup(nome, email, senha);
    
        if (res) {
          setError(res);
          return;
        }
    
        alert("Usuário cadatrado com sucesso!");
        navigate("/");
      };

    return(
        <div className="registrarContainer">
        <div className="registrarLabel">Realizar Cadastro</div>
        <div className="registrarContent">
            <Input
                type="text"
                placeholder="Digite seu Nome"
                value={nome}
                onChange={(e) => [setNome(e.target.value), setError("")]}
            />

            <Input
                type="email"
                placeholder="Digite seu E-mail"
                value={email}
                onChange={(e) => [setEmail(e.target.value), setError("")]}
            />
            <Input
                type="email"
                placeholder="Confirme seu E-mail"
                value={emailConf}
                onChange={(e) => [setEmailConf(e.target.value), setError("")]}
            />
            <Input
                type="password"
                placeholder="Digite sua Senha"
                value={senha}
                onChange={(e) => [setSenha(e.target.value), setError("")]}
            />
          <div className="registrarLabelError">{error}</div>
          <Button Text="Inscrever-se" onClick={handleSignup} />
          <div className="registrarLabelSignin">
            Já tem uma conta?
            <strong className="registrarStrong">
              <Link to="/">&nbsp;Entre</Link>
            </strong>
          </div>
        </div>
      </div>
    )
}

export default Registrar;