import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
`;

export const Title = styled.Text`
    margin-top: 30px;
    font-size: 18;
    font-weight: bold;
    color: #fff;
    align-self: flex-start;
    padding: 0 20px 5px;
`;

export const CarroselList = styled.FlatList`
    flex: 1;
`;

export const Slicer = styled.Image`
    height: 100px;
        width: 500px;
`;

export const Divi = styled.View``;

export const Subtitle = styled.Text`
    margin-top: 30px;
    font-size: 16;
    color: #fff;
    align-self: flex-start;
    padding: 0 20px 5px;
    font-weight: bold;
`;

export const Logo = styled.Image`
    margin-top: 50px;
    align-self: center;
`;

export const Capa = styled.Image`
    align-self: center;
    margin-top: 5px;
    height: 220px;
    width: 370px;
    border-radius: 4px;
`;

export const Form = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})`
    flex: 1;
`;

export const Rodape = styled.Image`
    margin-top: 5px;
    height: 160px;
    width: 300px;
    border-radius: 4px;
`;

export const TabContainer = styled.ScrollView.attrs({
    horizontal: true,
    contentContainerStyle: {paddingleft: 10, paddingRight: 20},
    showsHorizontalScrollIndicator: false,
})``;

export const TabItem = styled.View`
    border-radius: 3px;
    margin-left: 10px;
    padding: 10px;
    justify-content: space-between;
`;