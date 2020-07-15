import React, { useState } from 'react';
import Icon from "react-native-vector-icons/MaterialIcons";
import { Dimensions } from "react-native";

import Man from "../../../assets/Parceiro/Man.png"
import Background from "../../../components/background";
import { Container, Title, Top, Scroll, Advert, Spam, Logo, Title2, TabContainer, Divisor, Separator, Title3, Title4, List, Desc, SubmitButton, FagDesc, Fag } from './styles';

const { height } = Dimensions.get('window');

export default function Plans({ navigation }) {

  const [ screenHeight, setScreenHeight ] = useState(0);

    onContentSizeChange = (contentWidth, contentHeight) => {
        setScreenHeight(contentHeight)
    };

  const scrollEnabled = (screenHeight + 147) > height;

  function handlePlan1() {
    const plan = 'Básico';

    navigation.navigate('Join', { plantype: plan })
  }

  function handlePlan2() {

    const plan = 'Destaque';

    navigation.navigate('Join', { plantype: plan })
  }

  return (
    <Background>
      <Container>
        <Title>Seja parceiro</Title>

        <Scroll onContentSizeChange={onContentSizeChange} scrollEnabled={scrollEnabled}>

        <Top>
          <Advert>Aumente seu faturamento com a <Spam>Dezcontão!</Spam></Advert>
          <Logo source={Man} />
        </Top>

        
          <Title2>Escolha o plano ideal para sua empresa.</Title2>

          <TabContainer>
            <Divisor>
              <Separator>
                <Title3>Plano Básico</Title3>
              </Separator>

              <Title4>Benefícios incluídos:</Title4>

              <List>
                <Icon name="check-circle" size={20} color="#FFCC00" />
                <Desc>Anúncio no app</Desc>
              </List>

              <List>
                <Icon name="check-circle" size={20} color="#FFCC00" />
                <Desc>Uma faixa adicional para anúncios promocionais</Desc>
              </List>

              <List>
                <Icon name="check-circle" size={20} color="#FFCC00" />
                <Desc>Apontamento no mapa</Desc>
              </List>

              <List>
                <Icon name="check-circle" size={20} color="#FFCC00" />
                <Desc>Divulgação no instagram</Desc>
              </List>

              <List>
                <Icon name="check-circle" size={20} color="#FFCC00" />
                <Desc>Apenas 12x de R$ 41,90</Desc>
              </List>          


              <SubmitButton onPress={handlePlan1}>Escolher</SubmitButton>
            </Divisor>

            <Divisor>
              <Separator>
                <Title3>Plano Destaque</Title3>
              </Separator>

              <Title4>Benefícios incluídos:</Title4>

              <List>
                <Icon name="check-circle" size={20} color="#FFCC00" />
                <Desc>Anúncio padrão + Destaque*</Desc>
              </List>

              <List>
                <Icon name="check-circle" size={20} color="#FFCC00" />
                <Desc>Três faixas adicionais para descontos promocionais</Desc>
              </List>

              <List>
                <Icon name="check-circle" size={20} color="#FFCC00" />
                <Desc>Apontamento no mapa</Desc>
              </List>

              <List>
                <Icon name="check-circle" size={20} color="#FFCC00" />
                <Desc>Divulgação extra no instagram</Desc>
              </List>

              <List>
                <Icon name="check-circle" size={20} color="#FFCC00" />
                <Desc>Apenas 12x de R$ 58,90</Desc>
              </List>          


              <SubmitButton onPress={handlePlan2} >Escolher</SubmitButton>
            </Divisor>
          </TabContainer>

            <Title2>Perguntas Frequentes</Title2>
            <FagDesc>Tire suas dúvidas sobre o Dezcontão para seu comércio 
            e faça parte da maior rede de descontos.</FagDesc>

              <Fag>* Anúncios destaques ficam exibidos na tela principal do aplicativo. Esse espaço é exclusivo para assinantes do plano destaque. Essa exibição é feita durante 10 dias durante o mês.</Fag> 

              <Fag>* A divulgação extra no instagram, corresponde a postagem personalizadas na página do app.</Fag> 

              <Fag>* As faixas de desconto são espaços onde o comerciante poderá anunciar descontos maiores de 10%, caso queira. No plano padrão é possivél acrescentar uma faixa e no plano destaque mais 3.</Fag>    

        </Scroll>

      </Container>
    </Background>
  );
}
