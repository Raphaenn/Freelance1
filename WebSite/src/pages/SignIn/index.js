import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import history from "../../services/history";

import logo from "../../assets/Logo.svg"

export default function SignIn() {

  function handLogin() {
    history.push("/home")
  }

  return (
    <>

      <img src={logo} />

      <Form onSubmit={handLogin} >
        <Input name="ema/*  */il" type= "email" placeholder="Seu e-mail" />
        <Input name="password" type= "password" placeholder="Sua senha" />

        <button type="submit">Entrar</button>
        <Link to="/register"> Criar conta</Link>
      </Form>
    </>
    
  );
}
