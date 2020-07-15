import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    margin-top: 40px;
`;

export const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    align-self: center;
`;

export const Divisor = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})`
    /* display: flex;
    flex-direction: row; */
    /* flex: 1; */
    background: rgba(255, 255, 255, 0.1);
    margin-top: 10px;
    padding: 0 20px; 
`;

export const Top = styled.View`
    height: 100px;
    justify-content: center;
`;

export const Colum = styled.View`
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
`;

export const Desc = styled.Text`
    font-size: 18;
    color: #fff;
    align-self: center;
    margin-left: 15px;
    text-align: left;
    max-width: 280px;
    letter-spacing: 1;
`;

export const Body = styled.View`
    display: flex;
    flex-direction: column;
    min-height: 100%;
`;

export const Card = styled.View`
    display: flex;
    flex-direction: row;
    height: 130px;
    background: #fff;
    margin-top: 10px;
    border-radius: 10px;
`;

export const Left = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Img = styled.Image`
    height: 100%;
    width: 100%;
    align-self: center;
    border-radius: 10px;
`;

export const Right = styled.View`
    flex: 2;
    display: flex;
    flex-direction: column;
`;

export const AreaTextProd = styled.View`
    flex: 3;
`;

export const TextProd = styled.Text`
    font-size: 18px;
    color: #666666;  
    margin-top: 4%;
    margin-left: 5%;
    max-width: 80%;
`;

export const Desconto = styled.View`
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 30%;
    margin-left: 5px;
`;

export const TextDesc = styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: #E71D36;
    margin-left: 5%;
`;

export const AreaText = styled.View`
    flex: 2;
`;

export const TextMark = styled.Text`
    font-size: 16px;
    color: #666666;
    margin-left: 10px;
    margin-top: 10px;
`;

