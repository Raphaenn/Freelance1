// import React, { useState, useRef } from 'react';
// import { withNavigationFocus } from 'react-navigation';
// import Icon from "react-native-vector-icons/MaterialIcons";

// import Background from "../../components/background";
// import { Container, Title, Separator, Form, FormInput, SubmitButton, SubTitle } from "./styles";

// function More() {
//   const [ name, setName ] = useState('');
//     const [ email, setEmail ] = useState('');
//     const [ oldPassword, setOldPassword ] = useState('');
//     const [ password, setPassword ] = useState('');
//     const [ confirmPassword, setConfirmPassword ] = useState('');

//     const emailRef = useRef();
//     const oldPasswordRef = useRef();
//     const passwordRef = useRef();
//     const confirmPasswordRef = useRef();

//     function handleSubmit() {
//     };

//     return (
//         <Background>
//             <Container>
//                 <Title>Empresas</Title>
//                 <SubTitle>Para sua empresa empresa fazer</SubTitle>
//                 <SubTitle>parte, preencha o formulário abaixo</SubTitle>

//                 <Form>
//                 <FormInput 
//                         icon="person-outline"
//                         autoCorrect={false}
//                         autoCapitalize="none"
//                         placeholder="Digite seu nome completo"
//                         returnKeyType="next"
//                         onSubmitEditing={() => emailRef.current.focus() }
//                         value={name}
//                         onChangeText={setName}
//                     />

//                     <FormInput 
//                         icon="mail-outline"
//                         keyboardType="email-address"
//                         autoCorrect={false}
//                         autoCapitalize="none"
//                         placeholder="Digite seu email"
//                         ref={emailRef}
//                         returnKeyType="next"
//                         onSubmitEditing={() => oldPasswordRef.current.focus() }
//                         value={email}
//                         onChangeText={setEmail}
//                     />

//                 <Separator />

//                 <FormInput 
//                         icon="account-circle"
//                         secureTextEntry /* colocar pontinho no lugar da senha */
//                         keyboardType="email-address"
//                         placeholder="Nome da empresa"
//                         returnKeyType="next"
//                         onSubmitEditing={() => passwordRef.current.focus() }
//                         ref={oldPasswordRef}
//                         value={oldPassword}
//                         onChangeText={setOldPassword}
//                     />
//                 <FormInput 
//                         icon="code"
//                         secureTextEntry /* colocar pontinho no lugar da senha */
//                         keyboardType="email-address"
//                         placeholder="Cep"
//                         returnKeyType="next"
//                         onSubmitEditing={() => confirmPasswordRef.current.focus() }
//                         ref={passwordRef}
//                         value={password}
//                         onChangeText={setPassword}
//                     />

//                 <FormInput 
//                         icon="phone"
//                         secureTextEntry /* colocar pontinho no lugar da senha */
//                         keyboardType="email-address"
//                         placeholder="Telefone para contato"
//                         returnKeyType="next"
//                         onSubmitEditing={handleSubmit}
//                         ref={confirmPasswordRef}
//                         value={confirmPassword}
//                         onChangeText={setConfirmPassword}
//                     />
//                 <SubmitButton onPress={handleSubmit}>Atualizar perfil</SubmitButton>
//                 </Form>
//             </Container>
//         </Background>
//     )
// }

// More.navigationOptions = {
//   tabBarLabel: 'Empresas',
//   tabBarIcon: ({tintColor}) => <Icon name="account-box" size={20} color={tintColor} />
// }

// export default withNavigationFocus(More);
