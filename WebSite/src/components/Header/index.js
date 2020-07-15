import React from 'react';
import { Link } from "react-router-dom";

import name from "../../assets/Name.png"
import { Container, Content, Profile, Top } from './styles';

export default function Header() {
  return (
    <Container>
        <Content>
          <nav>
            <img src={name} alt="Dezcontao" />
              <Top to="/home">Home</Top>
              <Top to="/categorias">Categorias</Top>
              <Top to="/tickets">Tickets</Top>
          </nav>

          <aside>

            <Profile>
              <div>
                <strong>Raphael Neves</strong>
                <Link to="/home">Meu perfil</Link>
              </div>
              <img src={"https://api.adorable.io/avatars/50/abott@adorable.png"} alt="Profile" />
            </Profile>
          </aside>


        </Content>
    </Container>
  );
}
