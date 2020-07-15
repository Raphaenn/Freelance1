import styled from 'styled-components/native';
import Button from "../../../components/Button";

export const Container = styled.SafeAreaView`
    flex: 1;
    margin-top: 40px;
`;

export const Scroll = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})``;

export const Title = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: #fff;
    align-self: center
`;

export const Top = styled.View`
    margin-top: 10px;
    height: 120px;
    background: #fff;

    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-bottom-width: 1px;
    border-bottom-color: rgba(232, 232, 232, 0.5);
`;

export const Advert = styled.Text`
    text-align: center;
    width: 200px;
    margin-right: 30px;
    font-size: 26px;
    font-weight: bold;
    color: #AB59C1;
    margin-left: 30px;
`;

export const Spam = styled.Text`
    font-size: 27px;
    font-weight: bold;
    color: #FFCC00;
    margin-left: 30px;
`;

export const Logo = styled.Image`
    align-self: center;
`;

export const Second = styled.View`
    flex: 1;
    background: #fff;
`;

export const Body = styled.View`
    align-items: center;
`;

export const SubTitle = styled.Text`
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
    color: #666666;
`;

export const Steps = styled.Text`
    font-size: 14px;
    width: 200px;
    color: #666666;
    text-align: center;
`;

export const Icones = styled.Image`
    margin-top: 20px;
`;

export const SubmitButton = styled(Button)`
    width: 200px;
    align-self: center;
    margin-top: 20px;
    margin-bottom: 30px;
`;

export const IosEnd = styled.View`
    width: 200px;
    height: 40px;
    align-self: center;
    margin-top: 20px;
    margin-bottom: 30px;
`;