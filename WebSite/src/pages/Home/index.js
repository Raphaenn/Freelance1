import React, { useState, useEffect } from 'react';
import { MdSearch, MdAddCircle } from "react-icons/md";

import api from "../../services/api";
import { Container, Title, Top, First, Middle, Register } from './styles';
import Grafic from "../../components/Grafic";
import Table from "../../components/Table";

export default function Home() {

  const [ card, setCard ] = useState([]);
  const [ card2, setCard2 ] = useState([]);

  useEffect(() => {
    async function CatchData() {
      const response = await api.get('cupom');
      const response2 = await api.get("companies");

      const dados = response.data.map(item => item);
      const dados2 = response2.data.map(item => item);

      setCard(dados)
      setCard2(dados2)
    }
    CatchData();
  }, []);


  return (
    <Container>
      <Top>
        <Title>Dashboard</Title>
        <Register to='/novo'><p>New</p><MdAddCircle size={20} color="#7E59C1" /></Register>
      </Top>
      <First>
        <div><strong>EMPRESAS</strong> <small>{card2.length}</small> </div>
        <div><strong>DOWNLOADS APP</strong> <small>127</small> </div>
        <div><strong>CUPONS GERADOS</strong> <small>{card.length}</small> </div>
        <div><strong>CUSTO DE NÚVEM</strong> <small>R$500,00</small> </div>
      </First>

      <Middle>
        <Table />
        <Grafic />
      </Middle>

    </Container>
  );
}
