import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from "../../assets/Logo.svg"

export default function SignUp() {
  return (
    <>

      <img src={logo} />
    
      <Form >
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type= "email" placeholder="Seu e-mail" />
        <Input name="password" type= "password" placeholder="Sua senha" />

        <button type="submit">Criar conta</button>
        <Link to="/">Fazer login</Link>
      </Form>
    </>
  );
}
