import React, { useState, useRef } from 'react';
import { Alert } from "react-native";

import api from "../../../services/api";

import Man from "../../../assets/Join/Join.png"
import Background from "../../../components/background";
import { Container, Title, Scrolling, SubTitle, Logo, Spam, Top , Separator, Form, FormInput, SubmitButton} from "./styles";

export default function Join({ navigation }) {

  const [ username, setName ] = useState('');
    const [ useremail, setEmail ] = useState('');
    const [ companyname, setCompany ] = useState('');
    const [ usercep, setCep ] = useState('');
    const [ userphone, setPhone ] = useState('');

    const emailRef = useRef();
    const oldPasswordRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const dados = navigation.getParam('plantype');

    async function handleSubmit() {
       try {
            await api.post('partner', {
                name: username,
                email: useremail,
                cep: usercep,
                tel: userphone,
                company: companyname,
                plan: dados
            });

            Alert.alert('Sucesso', 'Entraremos em contato');

       } catch (err) {
           Alert.alert("Falha", "Verifique se os dados estão preenchidos");
       }
        
    };

    return (
        <Background>
            <Container>
                <Title>Cadastro</Title>

            <Scrolling>
                <Top>
                    <SubTitle>Preencha o formulário e faça sua solicitação!</SubTitle>
                    <Logo source={Man} />
                </Top>
                <Spam>Ao prosseguir, aceito que a Dezcontão entre em contato comigo por telefone, e-mail ou WhatsApp (incluindo mensagens para fins comerciais).</Spam>
                

                <Form>
                <FormInput 
                        icon="person-outline"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Digite seu nome completo"
                        returnKeyType="next"
                        onSubmitEditing={() => emailRef.current.focus() }
                        value={username}
                        onChangeText={setName}
                    />

                    <FormInput 
                        icon="mail-outline"
                        keyboardType="email-address"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Digite seu email"
                        ref={emailRef}
                        returnKeyType="next"
                        onSubmitEditing={() => oldPasswordRef.current.focus() }
                        value={useremail}
                        onChangeText={setEmail}
                    />

                <Separator />

                <FormInput 
                        icon="account-circle"
                        autoCapitalize="none"
                        placeholder="Nome da empresa"
                        returnKeyType="next"
                        onSubmitEditing={() => passwordRef.current.focus() }
                        ref={oldPasswordRef}
                        value={companyname}
                        onChangeText={setCompany}
                    />
                <FormInput 
                        icon="code"
                        autoCapitalize="none"
                        placeholder="Cep"
                        returnKeyType="next"
                        onSubmitEditing={() => confirmPasswordRef.current.focus() }
                        ref={passwordRef}
                        value={usercep}
                        onChangeText={setCep}
                    />

                <FormInput 
                        icon="phone"
                        placeholder="Telefone para contato"
                        returnKeyType="next"
                        onSubmitEditing={handleSubmit}
                        ref={confirmPasswordRef}
                        value={userphone}
                        onChangeText={setPhone}
                    />
                <SubmitButton onPress={handleSubmit}>Solicitar plano</SubmitButton>
                </Form>
            </Scrolling>
            </Container>
        </Background>
    )
}
