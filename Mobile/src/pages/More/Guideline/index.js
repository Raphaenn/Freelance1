import React, { useState } from 'react';
import { Dimensions } from "react-native";

import Rocket from "../../../assets/Rocket.png";
import Pick from "../../../assets/Icons/Pick.png"
import Form from "../../../assets/Icons/Form.png"
import Contract from "../../../assets/Icons/Contract.png"
import Background from "../../../components/background";
import { Container, Title, Scroll, Top, Advert, Spam, Logo, Second, Body, SubTitle, Steps, Icones, SubmitButton } from './styles';


const { height } = Dimensions.get('window');

export default function Guideline({ navigation }) {

  const [ screenHeight, setScreenHeight ] = useState(0);

  onContentSizeChange = (contentWidth, contentHeight) => {
      setScreenHeight(contentHeight)
  };

const scrollEnabled = (screenHeight + 147) > height;

  function handlePlan1() {
    navigation.navigate('Plans')
  }

  return (
    <Background>
        <Container>
            <Title>Empresas</Title>

          <Scroll onContentSizeChange={onContentSizeChange} scrollEnabled={scrollEnabled}>

            <Top>
                <Advert>Faça seu negócio <Spam>decolar</Spam></Advert>
                <Logo source={Rocket} />
            </Top>

            <Second>
              <Body>
                <Icones source={Pick} />
                <SubTitle>Planos</SubTitle>
                <Steps>
                  Na próxima página, escolha o plano que melhor se encaixa em seu negócio.
                </Steps>
              </Body>

              <Body>
                <Icones source={Form} />
                <SubTitle>Cadastro</SubTitle>
                <Steps>
                  Depois, é só preencher o cadastro com as informações solicitadas.
                </Steps>
              </Body>

              <Body>
                <Icones source={Contract} />
                <SubTitle>Contrato</SubTitle>
                <Steps>
                  Feito isso, em até 24 horas entraremos em contato com você.
                </Steps>
              </Body>

              <SubmitButton onPress={handlePlan1} >Prosseguir</SubmitButton>
            </Second>

          </Scroll>

        </Container>
    </Background>
  );
}
