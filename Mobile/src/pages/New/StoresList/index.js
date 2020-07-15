import React, { useEffect, useState } from 'react';
import Icon from "react-native-vector-icons/MaterialIcons";

import api from "../../../services/api";
import Background from "../../../components/background";
import { Container, Title, Divisor, Line, ListStore, Name, Separator } from './styles';

export default function StoresList({ navigation }) {

  const [ comps, setComps ] = useState([]);
  const cat = navigation.getParam('categorynumber')

  useEffect(() => {
    async function loadCompanies() {
      const response = await api.get('companies');

      setComps(response.data)
    }
    loadCompanies();
  }, []);

  return (
    <Background>
      <Container>
        <Title>Lojas</Title>

      <Divisor>
      <ListStore
          data={comps}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => {
           if(item.categories.id === cat)  {
             return (
          <>
          <Line onPress={() => navigation.navigate('Company', { brand: item })} >
          <Name>{item.name}</Name>
          <Icon name="chevron-right" size={30} color="rgba(70, 73, 76, 0.3)" />
          </Line>
          <Separator />
          </>
          )
           }  
           return (<></>)
          }}
        >
        </ListStore>
      </Divisor>

      </Container>
    </Background>
  );
}

// .map(item => item.categories.id === cat ? { ...item } : )