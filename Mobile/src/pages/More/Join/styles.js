import styled from "styled-components/native";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

export const Container = styled.SafeAreaView`
    flex: 1;
    margin-top: 40px;
`;

export const Scrolling = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})``;

export const Title = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: #fff;
    align-self: center;
`;

export const Top = styled.View`
    margin-top: 10px;
    height: 160px;
    background: #fff;

    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const SubTitle = styled.Text`
    width: 200px;
    font-size: 24px;
    font-weight: bold;
    margin-right: 30px;
    color: #AB59C1;
    text-align: center;
`;

export const Spam = styled.Text`
    font-size: 9px;
    color: #fff;
    margin-left: 5px;
`;

export const Logo = styled.Image`
    align-self: center;
`;

export const Separator = styled.View`
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
    margin: 20px 0 30px;
`;

export const Form = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: { padding: 30 },
})`
    align-self: stretch;
    margin-top: 20px;
`;

export const FormInput = styled(Input)`
    margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
    margin-top: 5px;
`;

export const LogoutButton = styled(Button)`
    margin-top: 10px;
    background: #f64c75;
`;