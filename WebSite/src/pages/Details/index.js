import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from 'yup';

import AvatarInput from './AvatarInput';
import { Container, ConfirmButton, DeleteButton } from './styles';

import { updateCompanyRequest, deleteCompany } from "../../store/modules/edit/actions";

export default function Details() {

  const dispatch = useDispatch();
  const companies = useSelector(state => state.edit.dados);

  const schema = Yup.object().shape({
    id: Yup.string(),
    name: Yup.string().required("Campo Obrigatório"),
    email: Yup.string("Email Inválido").required("Campo Obrigatório"),
    social: Yup.string("Instagram Inválido").required("Campo Obrigatório"),
    phone: Yup.string("Telefone Inválido").required("Campo Obrigatório"),
    cep: Yup.string("Cep Inválido").required("Campo Obrigatório"),
    address: Yup.string("Endereço Inválido").required("Campo Obrigatório"),
    open_to: Yup.string("Campo Inválido").required("Campo Obrigatório"),
    latitude: Yup.string("Latitude Inválido").required("Campo Obrigatório"),
    longitude: Yup.string("Longitude Inválido").required("Campo Obrigatório"),
    paymentform: Yup.string("Campo Inválido").required("Campo Obrigatório"),
    obs: Yup.string("Campo Inválido").required("Campo Obrigatório"),
    ticket: Yup.string("Campo Inválido").required("Campo Obrigatório"),
    ticket2: Yup.string("Campo Inválido"),
    ticket3: Yup.string("Campo Inválido"),
    ticket4: Yup.string("Campo Inválido"),
    highlight: Yup.string("Campo Inválido"),
    category: Yup.string("Campo Inválido").required("Campo Obrigatório"),
    path1: Yup.string("Campo Inválido")
});

function handlesubmit(data) {
  dispatch(updateCompanyRequest(data))
};

function handleDelete(categories) {
  dispatch(deleteCompany(categories))
}

  return (
    <Container>
                
        <Form initialData={companies} schema={schema} onSubmit={handlesubmit} >

          <a>
            <p>Id</p>
            <Input name="id"/>
          </a>
          <AvatarInput name="path1"/>

          <p>Nome da Empresa</p>
          <Input name="name"/>

          <p>Email</p>
          <Input name="email" />

          <p>Instagram</p>
          <Input name="social" />

          <p>Telefone</p>
          <Input name="phone" />
          <hr/>

          <p>Cep</p>
          <Input name="cep" />

          <p>Endereço</p>
          <Input name="address" />

          <p>Horário de funcionamento</p>
          <Input name="open_to" />

          <p>Latitude</p>
          <Input name="latitude" />
          
          <p>Longitude</p>
          <Input name="longitude" />
          
          <p>Forma de pagamento</p>
          <Input name="paymentform" />
          
          <p>Obs</p>
          <Input name="obs" />
          
          <p>Ticket</p>
          <Input name="ticket" />
          
          <p>Ticket 2</p>
          <Input name="ticket2" />
          
          <p>Ticket 3</p>
          <Input name="ticket3" />
          
          <p>Ticket 4</p>
          <Input name="ticket4" />
          
          <p>Destaque</p>
          <Input name="highlight" />

          <p>Categoria</p>
          <Input name="category" placeholder={companies.categories.id} />

          <ConfirmButton type="submit">Atualizar Dados</ConfirmButton>
        </Form>
          <DeleteButton onClick={() => handleDelete(companies)}>Excluir</DeleteButton>
      
    </Container>
  );
}
