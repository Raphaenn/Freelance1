import styled from 'styled-components/native';
import { RectButton } from "react-native-gesture-handler";


export const Container = styled.SafeAreaView`
    flex: 1;
    margin-top: 40px;
`;

export const Title = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: #fff;
    align-self: center;
`;

export const Divisor = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})`
    flex: 1;
    background: #fff;
    margin-top: 10px;
    padding: 0 20px; 
`;

export const CompanyName = styled.Text`
    font-size: 30px;
    color: #202223;
    margin-left: 10px;
    margin-top: 15px;
`;

export const  CompanyDesc = styled.Text`
    font-size: 16px;
    color: #666666;
    margin-left: 10px;
    margin-top: 2px;    
`;

export const Rodape = styled.Image`
    margin-top: 15px;
    height: 180px;
    width: 380px;
    align-self: center;
    border-radius: 4px;
`;

export const Icons = styled.View`
    flex-direction: row;
    margin-top: 30px;
    justify-content: space-around;    
`;

export const TabItem = styled(RectButton)`
    width: 75px;
    height: 50px;
    background: rgba(232, 232, 232, 0.5);
    border-radius: 10px;
    padding: 10px;
    align-items: center;
    justify-content: center;
`;

export const TabItemW = styled(RectButton)`
    width: 75px;
    height: 50px;
    background: rgba(74, 201, 89, 1);
    border-radius: 10px;
    padding: 10px;
    align-items: center;
    justify-content: center;
`;

export const TabItemD = styled(RectButton)`
    width: 75px;
    height: 50px;
    background: rgba(255, 204, 0, 1);
    border-radius: 10px;
    padding: 10px;
    align-items: center;
    justify-content: center;
`;

export const Small = styled.Text`
    font-size: 12px;
    color: #7B59C1;
    margin-top: 2px;   
`;

export const SmallD = styled.Text`
    font-size: 12px;
    color: #fff;
    font-weight: bold;
    margin-top: 2px;   
`;

export const DescList = styled.View`
    margin-top: 20px;
    flex: 1;
`;

export const Brenchs = styled.View`
    margin-top: 10px;
    padding: 0 0 10px;
    border-bottom-width: 1px;
    border-bottom-color: rgba(232, 232, 232, 0.5);
`;

export const Desc = styled.Text`
    font-size: 18px;
    color: #202223;
    margin-left: 10px;
    margin-bottom: 5px;
`;


