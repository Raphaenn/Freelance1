import React, { useState, useEffect } from 'react';
import { Dimensions } from "react-native";
import { withNavigationFocus } from 'react-navigation';
import Icon from "react-native-vector-icons/MaterialIcons";

import logo from "../../assets/logos2/Logo.png";
// import logo from "../../assets/logos/logo.png"
import Banner from "../../assets/Barner3/Public.png"
import Banner2 from "../../assets/Barner2/Dez.png"
import Banner3 from "../../assets/Barner1/Comp.png"
import Banner4 from "../../assets/Barner4/Porc.png"

import Carrosel from "../../components/carrosel";
import Background from "../../components/background";
import { Container, Title, Subtitle, Form, Logo, TabContainer, TabItem, Rodape } from './styles';

const { height } = Dimensions.get('window');

function Home({ navigation }) {

    const [ screenHeight, setScreenHeight ] = useState(0);

    onContentSizeChange = (contentWidth, contentHeight) => {
        setScreenHeight(contentHeight)
    };

  const scrollEnabled = (screenHeight + 147) > height;

    return (
        <Background>
            <Container>
                 
                <Form onContentSizeChange={onContentSizeChange} scrollEnabled={scrollEnabled}>
                    <Logo source={logo} />
                    <Title>Ofertas em destaques</Title>
                        <Carrosel/>
                        

                    <Subtitle>Garanta grandes descontos pelo app</Subtitle>
                    <TabContainer>
                        <TabItem>
                            <Rodape source={Banner} />
                        </TabItem>

                        <TabItem>
                            <Rodape source={Banner4} />
                        </TabItem>

                        <TabItem>
                            <Rodape source={Banner3} />
                        </TabItem>

                        <TabItem>
                            <Rodape source={Banner2} />
                        </TabItem>
                    </TabContainer>

                </Form>

            </Container>
        </Background>
    )
  
}

Home.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({tintColor}) => <Icon name="home" size={20} color={tintColor} />
}

export default withNavigationFocus(Home)