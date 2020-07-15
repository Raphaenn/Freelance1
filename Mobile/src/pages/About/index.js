import React from 'react';
import { View } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import Icon from "react-native-vector-icons/MaterialIcons";

import Background from "../../components/background";
import { Container, Title, SubTitle ,Body, Section } from './styles';

function About() {
  return (
    <Background>
      <Container>
        <Title>Política de Uso</Title>

        <Section>
        <SubTitle>A Política de uso do App Dezcontão foi atualizada em 31 de janeiro de 2020.</SubTitle>
        <Body>
        Todas as promoções presentes no aplicativo Dezcontão são estabelecidas pelas empresas parceiras.
        Portanto, qualquer descumprimento dos valores presentes no app devem ser informados a nós, por meio do número (21) 96913-4355. Além disso, para validar o seu desconto é necessário passar o código gerado para o estabelecimento, após clicar em pegar o cupom. Sem este código o estabelecimento poderá não aceitar o efeito da promoção ofertada pela Dezcontão. Para demais dúvidas ou sugestões entrem em contato conosco através do email aplicativodezcontao@gmail.com. 

        </Body>
        </Section>
      </Container>

    </Background>
  );
}

About.navigationOptions = {
  tabBarLabel: 'Info',
  tabBarIcon: ({tintColor}) => <Icon name="info" size={20} color={tintColor} />
}

export default withNavigationFocus(About);
