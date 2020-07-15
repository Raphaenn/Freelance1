import styled from 'styled-components/native';
import { RectButton, BorderlessButton } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";

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

export const Body = styled.View`
    flex: 1;
    margin-top: 10px;
    background: #fff;
    padding: 0 20px;
`;

export const SearchContainer = styled.View`
    align-self: center;
    margin-top: 10px;
    width: 300px;
    height: 40px;
    border-radius: 15px;
    background: rgba(232, 230, 232, 0.8);
    padding: 0 15px;
    border: 1px solid #eee;
    flex-direction: row;
    align-items: center;

`;

export const SeachBar = styled.TextInput.attrs({
    placeholderTextColor: '#999',
    fontSize: 16,
})`
    flex: 1;
    font-size: 15px;
    margin-left: 10px;
    color: #202223;
`;

export const Searchresult = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})`
    flex: 1;
    margin-top: 10px;
    background: #fff;
    padding: 0 20px;
`;

export const Line = styled(BorderlessButton)`
    flex-direction: row;
    margin: 5px;
    align-items: center;
    padding: 20px;
    /* border: 1px solid #eee; */
    background: rgba(232, 230, 232, 0.20);
    border-radius: 10px;
`;

export const Name = styled.Text`
    flex: 1;
    font-size: 16px;
    font-weight: bold;
    color: #202223;
    margin-left: 10px;
`;

export const CatList = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
    numColumns: 4,
})`
`;

export const Agreg = styled.View`
    padding: 2px;
    flex: 1;

    align-items: center;
    margin: 0 1px 20px;
`;

export const Brenchs = styled(RectButton)`
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    background: rgba(232, 230, 232, 0.25);
    /* border: 1px solid #666666; */
    border-radius: 30px;
    margin-top: 20px;
`;

export const Desc = styled.Text`
    font-size: 14px;
    color: #3B3636;
    margin-top: 5px;
`;


