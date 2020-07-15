import React from 'react';
import Icon from "react-native-vector-icons/MaterialIcons";

import { Container, Title, Divisor, Top, Colum, Desc, Body, Card, Left, Img, Right, AreaTextProd, TextProd, Desconto, TextDesc, AreaText, TextMark } from './styles';
import Background from "../../../components/background";
import Forn1 from "../../../assets/Forn1.png";

export default function ProductList({ navigation }) {

    const dados = navigation.getParam('brandData');

  return (
    <Background>
        <Container>
            <Title>Promoções</Title>

            <Divisor>
              <Top>
                <Colum>
                  <Icon name="grain" size={80} color="#F4C430" />
                  <Desc>Aqui, você compra {'\n'}nas melhores lojas e tudo {'\n'}isso com preços exclusivos!</Desc>
                </Colum>
              </Top>

              <Body>

                <Card>
                  <Left>
                    <Img source={{ uri: dados.path.url ? dados.path.url : Forn1 }} />
                  </Left>

                  <Right>
                    <AreaTextProd>
                      <TextProd numberOfLines={2}>{dados.ticket.split(' (')[0]}</TextProd>
                    </AreaTextProd>
                    <Desconto>
                      <Icon name="arrow-downward" size={25} color="#E71D36" />
                      <TextDesc>{dados.ticket.split(/[()]/)[1]}</TextDesc>
                    </Desconto>
                    <AreaText>
                      <TextMark>Desconto exclusivo do app</TextMark>
                    </AreaText>
                  </Right>
                </Card>

                {
                  dados.ticket2 ? (
                    <Card>
                  <Left>
                    <Img source={{ uri: dados.path.url ? dados.path.url : Forn1 }} />
                  </Left>

                  <Right>
                    <AreaTextProd>
                      <TextProd numberOfLines={2}>{dados.ticket2.split(' (')[0]}</TextProd>
                    </AreaTextProd>
                    <Desconto>
                      <Icon name="arrow-downward" size={25} color="#E71D36" />
                      <TextDesc>{dados.ticket2.split(/[()]/)[1]}</TextDesc>
                    </Desconto>
                    <AreaText>
                      <TextMark>Desconto exclusivo do app</TextMark>
                    </AreaText>
                  </Right>
                </Card>
                  ) : <></>
                }

                {
                  dados.ticket3 ? (
                    <Card>
                  <Left>
                    <Img source={{ uri: dados.path.url ? dados.path.url : Forn1 }} />
                  </Left>

                  <Right>
                    <AreaTextProd>
                      <TextProd numberOfLines={2}>{dados.ticket3.split(' (')[0]}</TextProd>
                    </AreaTextProd>
                    <Desconto>
                      <Icon name="arrow-downward" size={25} color="#E71D36" />
                      <TextDesc>{dados.ticket3.split(/[()]/)[1]}</TextDesc>
                    </Desconto>
                    <AreaText>
                      <TextMark>Desconto exclusivo do app</TextMark>
                    </AreaText>
                  </Right>
                </Card>
                  ) : <></>
                }

                {
                  dados.ticket4 ? (
                    <Card>
                  <Left>
                    <Img source={{ uri: dados.path.url ? dados.path.url : Forn1 }} />
                  </Left>

                  <Right>
                    <AreaTextProd>
                      <TextProd numberOfLines={2}>{dados.ticket4.split(' (')[0]}</TextProd>
                    </AreaTextProd>
                    <Desconto>
                      <Icon name="arrow-downward" size={25} color="#E71D36" />
                      <TextDesc>{dados.ticket4.split(/[()]/)[1]}</TextDesc>
                    </Desconto>
                    <AreaText>
                      <TextMark>Desconto exclusivo do app</TextMark>
                    </AreaText>
                  </Right>
                </Card>
                  ) : <></>
                }
                
              </Body>

            </Divisor>
        </Container>
    </Background>
  );
}
