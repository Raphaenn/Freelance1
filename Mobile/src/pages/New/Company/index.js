import React, { useState } from 'react';
import { Dimensions, Platform, Linking, Alert } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import Forn1 from "../../../assets/Forn1.png";
import Background from "../../../components/background";

import { Container, Title, Divisor, CompanyName, CompanyDesc, Rodape, Icons, TabItem, TabItemW ,TabItemD, Small, SmallD, DescList, Brenchs, Desc } from './styles';

const { height } = Dimensions.get('window');

export default function Company({ navigation }) {

  const brandData = navigation.getParam('brand');

  const [ screenHeight, setScreenHeight ] = useState(0);

  onContentSizeChange = (contentWidth, contentHeight) => {
    setScreenHeight(contentHeight)

  };

  const scrollEnabled = (screenHeight + 200) > height;

  function handleCall() {

    try {
      
    let phoneNumber = '';

    if(Platform.OS === "ios") {
      phoneNumber = `telprompt:${brandData.phone}`
    } else {
      phoneNumber = `tel:${brandData.phone}`;
    }

    Linking.openURL(phoneNumber);
      
    } catch {
      Alert.alert('Falha', 'Não foi possivel completar a ligação')
    }
    
  }

  function handleWhatsapp() {

    try {
      Linking.canOpenURL("whatsapp://send?text=Olá").then(supported => {
        if (supported) {
          return Linking.openURL(
            `whatsapp://send?phone=${brandData.phone}&text=Oi`
          );
        } else {
          Alert.alert('Instale o WhatsApp para poder enviar sua mensagem');  
        }
      });
    } catch {
        Alert.alert('Não foi possivel entrar em contato no momento');
    }
};


  return (
    <Background>
      <Container>
        <Title>Empresa</Title>

        <Divisor onContentSizeChange={onContentSizeChange} scrollEnabled={scrollEnabled} >
          <CompanyName>{brandData.name}</CompanyName>
          <CompanyDesc>{brandData.obs}</CompanyDesc>
          <Rodape source={{ uri: brandData.path.url ? brandData.path.url : Forn1 }} />

        <Icons>
          <TabItem onPress={handleCall} >
            <Icon name="phone" size={20} color="#7B59C1" />
            <Small>Ligar</Small>
          </TabItem>

          <TabItem onPress={handleWhatsapp}>
            <Icon name="chat" size={20} color="#7B59C1" />
            <Small>Zap</Small>
          </TabItem>

          <TabItem onPress={() => navigation.navigate('ProductList', { brandData })} >
            <Icon name="shopping-cart" size={20} color="#7B59C1" />
            <Small>Produtos</Small>
          </TabItem>

          <TabItemD onPress={() => navigation.navigate('Ticket', { brandData })} >
            <Icon name="loyalty" size={20} color="#fff" />
            <SmallD>Ticket</SmallD>
          </TabItemD>

        </Icons>

        <DescList>
            <Brenchs>
              <Desc>Horário:</Desc>
              <CompanyDesc>{brandData.open_to}</CompanyDesc>
            </Brenchs>

            <Brenchs>
              <Desc>Endereço:</Desc>
              <CompanyDesc>{brandData.address}</CompanyDesc>
            </Brenchs>

            <Brenchs>
              <Desc>Telefone:</Desc>
              <CompanyDesc>{brandData.phone}</CompanyDesc>
            </Brenchs>

            <Brenchs>
              <Desc>Instagram:</Desc>
              <CompanyDesc>{brandData.social}</CompanyDesc>
            </Brenchs>
            
          </DescList>

        </Divisor>
      </Container>
    </Background>
  );
}
