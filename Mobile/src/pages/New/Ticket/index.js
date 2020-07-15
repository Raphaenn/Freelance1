import React from 'react';
import { View, Alert } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Dash from "react-native-dash";

import api from "../../../services/api";
import name from "../../../assets/Name/Name.png";
import Background from "../../../components/background";
import { Container, ScrollV, Divisor, Top, Name, First, TicketTitle, TicketDesc, Second, Title, Brenchs, Desc, Small, SubmitButton } from './styles';

export default function Ticket({ navigation }) {

  const dados = navigation.getParam('brandData');
  const code = dados.name.substr(0,3) + Math.floor(Math.random() * 1000 + 999)

  async function handleTicket() {

    await api.post("cupom", {
      name: code,
      companies_id: dados.id,
		  categories_id: dados.categories.id
    })

    Alert.alert(code, 'Cupom adquirido');
  }

  return (
    <Background>
      <Container>
        
      <ScrollV>
          <Divisor>
            <Top>
                <Icon name="loyalty" size={40} color="#FFCB1F" />
            </Top>

            <First>
              <Name source={name} />

              <TicketTitle>Cupom {dados.name}</TicketTitle>
              <Icon name="local-play" size={40} color="#FFCB1F" alignSelf='center' />
              <TicketDesc>Só com esse cupom você garante grandes desconto nas sua loja favorita.</TicketDesc>

            </First>

            <View style={{justifyContent:'space-between', flexDirection:'row'}}>
              <View style={{height:20, width:20, backgroundColor:'#9A59C1', borderRadius:10}}/>
                <Dash dashGap={5} dashColor={'rgba(70, 73, 76, 0.2)'} style={{width:325, height:1, alignSelf: 'center'}}/>
              <View style={{height:20, width:20, backgroundColor:'#9A59C1', borderRadius:10,}}/>
            </View>

            <Second>

              <Title>Valor do ticket:</Title>

                <Brenchs>
                  <Desc>Dados do desconto:</Desc>
                  <Small>{dados.ticket.split(' (')[0]} - {dados.ticket.split(/[()]/)[1]} </Small>
                </Brenchs>

                { dados.ticket2 ? (
                  <Brenchs>
                  <Desc>Dados do desconto:</Desc>
                  <Small>{dados.ticket2.split(' (')[0]} - {dados.ticket2.split(/[()]/)[1]}</Small>
                </Brenchs>
                ) : <></>}

                { dados.ticket3 ? (
                  <Brenchs>
                  <Desc>Dados do desconto:</Desc>
                  <Small>{dados.ticket3.split(' (')[0]} - {dados.ticket3.split(/[()]/)[1]}</Small>
                </Brenchs>
                ) : <></>}

                { dados.ticket4 ? (
                  <Brenchs>
                  <Desc>Dados do desconto:</Desc>
                  <Small>{dados.ticket4.split(' (')[0]} - {dados.ticket4.split(/[()]/)[1]}</Small>
                </Brenchs>
                ) : <></>}

                <Brenchs>
                  <Desc>Formas de pagamento:</Desc>
                  <Small>{dados.paymentform}</Small>
                </Brenchs>
              </Second>

          </Divisor>
          <SubmitButton onPress={handleTicket} >Pegar Cupom</SubmitButton>
        </ScrollV>
      </Container>
    </Background>
  );
}
