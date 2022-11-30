import { Container } from "./styles";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import imgLogo from '../../assets/Logo.svg'
import {OrderButton} from '../../components/OrderButton'

import { api } from "../../service/api";

export function SignUp(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  function handleSignUp(){

    if(!name || !email || !password){
      return alert("Preencha todos os campos para continuar")
    };

    if(password.length <= 5){
      return alert("A senha precisa ter no mínimo 6 caracteres!")
    };

    api.post("/users", { name, email, password })
    .then(() => {
      alert("Usuário cadastrado com sucesso!"),
      navigate(-1)
    })
    .catch( error => {
      if(error.response){
        return alert(error.response.data.message);
      } else {
        return alert("não foi possível cadastrar");
      }
    })
  }

  return (
    <Container>
      <div className="logo">
        <img src={imgLogo} alt="" />
        <p>food explorer</p>
      </div>

      <form>
        <h2>Faça login</h2>

        <div className="input-wrapper">
          <label htmlFor="name">Seu nome</label>
          <input 
            type="text" 
            name="name" 
            placeholder="Exemplo: Maria da Silva"
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input 
            type="text" 
            name="email" 
            placeholder="Exemplo: exemplo@exemplo.com.br"
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="password">Senha</label>
          <input 
            type="password" 
            name="password" 
            placeholder="No mínimo 6 caracteres"
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <OrderButton 
          add
          title="Cadastrar"
          onClick={handleSignUp}
        />

        <a href="/">Já tenho uma conta</a>
      </form>
    </Container>
  )
}