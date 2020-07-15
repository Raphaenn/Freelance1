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

export const Advert = styled.Text`
    text-align: center;
    width: 200px;
    margin-right: 30px;
    font-size: 24px;
    font-weight: bold;
    color: #AB59C1;
    margin-left: 30px;
`;

export const Spam = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #FFCC00;
    margin-left: 30px;
`;

export const Logo = styled.Image`
    align-self: center;
`;

export const Title2 = styled.Text`
    margin-top: 20px;
    width: 300px;
    font-size: 22px;
    font-weight: bold;
    color: #fff;
    align-self: center;
    text-align: center;
`;

export const Divisor = styled.View`
    height: 420px;
    width: 350px;
    background: #fff;
    padding: 0 20px; 
    margin-top: 20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    align-items: center;
    align-self: center;
    margin-left: 10px;
    margin-right: 5px;
`;

export const Separator = styled.View`
    width: 350px;
    border-bottom-width: 1px;
    border-bottom-color: rgba(232, 232, 232, 0.8);
`;

export const Title3 = styled.Text`
    margin-top: 10px;
    margin-bottom: 15px;
    font-size: 20px;
    font-weight: bold;
    color: #202223;
    align-self: center;
    text-align: center;
`;

export const Title4 = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #202223;
    align-self: center;
    text-align: center;
    margin-top: 10px;
`;

export const List = styled.View`
    padding: 0 15px;
    border-radius: 4px;
    margin-top: 20px;
    flex-direction: row;
    align-items: center;
`;

export const Desc = styled.Text`
    flex: 1;
    font-size: 15px;
    margin-left: 10px;
    color: #202223;
`;

export const SubmitButton = styled(Button)`
    width: 200px;
    margin-top: 30px;
`;

export const TabContainer = styled.ScrollView.attrs({
    horizontal: true,
    contentContainerStyle: {paddingleft: 10, paddingRight: 30, paddingBottom: 30},
    showsHorizontalScrollIndicator: false,
})``;

export const FagDesc = styled.Text`
    font-size: 16px;
    color: #fff;
    margin-top: 12px;
    margin-left: 20px;
    margin-bottom: 20px;
`;

export const Fag = styled.Text`
    font-size: 14px;
    color: #fff;
    margin-top: 5px;
    margin-left: 20px; 
    margin-right: 20px;
    margin-bottom: 15px;
`;