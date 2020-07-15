import styled from 'styled-components/native';
import Button from "../../../components/Button";


export const Container = styled.SafeAreaView`
    flex: 1;
    margin-top: 20px;
    align-items: center;
`;

export const ScrollV = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})`
    flex: 1;
    margin-top: 20px;
    margin-bottom: 10px;
`;

export const Divisor = styled.View`
    
    width: 340px;
    background: #fff;
    padding: 0 20px; 
    margin-top: 50px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    align-items: center;
`;

export const Top = styled.View`
    width: 70px;
    height: 70px;
    align-self: center;
    align-items: center;
    justify-content: center;
    margin-top: -30px;
    background: #fff;
    border-radius: 35px;
    border: 1px solid rgba(232, 230, 232, 0.3);
    box-shadow: 0px 1px 1px #2E2E37;
`;

export const First = styled.View`
    width: 340px;
    height: 300px;
    align-items: center;
`;

export const Name = styled.Image`
    margin-top: 10px;
`;

export const TicketTitle = styled.Text`
    font-weight: bold;
    font-size: 24px;
    color: #4D4D4D;
    margin-top: 10px;
`;

export const TicketDesc = styled.Text`
    font-size: 14px;
    text-align: center;
    font-weight: bold;
    color: #202223;
    margin-top: 30px;
`;

export const Second = styled.View`
    position: relative;
    width: 310px;
    /* align-self: stretch; */
`;

export const Title = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #202223;
    margin-top: 20px;
    align-self: center;
`;

export const Small = styled.Text`
    font-size: 16px;
    color: #666666;
    margin-left: 10px;
    margin-top: 2px;    
`;

export const Brenchs = styled.View`
    margin-top: 10px;
    padding: 10px 0 10px;
    border-bottom-width: 1px;
    border-bottom-color: rgba(232, 232, 232, 0.5);
`;

export const Desc = styled.Text`
    font-size: 18px;
    
    color: #202223;
    margin-left: 10px;
    margin-bottom: 5px;
`;

export const SubmitButton = styled(Button)`
    align-self: center;
    width: 300px;
    border-radius: 10px;
    margin-top: 10px;
`;