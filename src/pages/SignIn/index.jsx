import { Container } from "./styles";

import imgLogo from '../../assets/Logo.svg';

import {OrderButton} from '../../components/OrderButton';

import { useAuth } from "../../hooks/auth";
import { useState } from "react";
import { Link } from "react-router-dom";

export function SignIn(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, isLoading } = useAuth();

  function handleSignIn(){
    if(!email || !password){
      return alert("Preencha todos os campos")
    }
    signIn({email, password: String(password)});
  };

  return (
    <Container>
      <div className="logo">
        <img src={imgLogo} alt="" />
        <p>food explorer</p>
      </div>

      <form>
        <h2>Faça login</h2>

        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input 
            type="email" name="email" 
            placeholder="Exemplo: exemplo@exemplo.com.br"
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="password">Senha</label>
          <input 
            type="password" 
            name="password" placeholder="No mínimo 6 caracteres"
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <OrderButton 
          title={isLoading ? "Entrando..." : "Entrar"}
          onClick={handleSignIn}
          disabled={isLoading}
        />

        <Link href="/register">Criar uma conta</Link>
      </form>
    </Container>
  );
};