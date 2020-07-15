import styled from 'styled-components/native';
import { BorderlessButton } from "react-native-gesture-handler";
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

export const Divisor = styled.View`
    flex: 1;
    background: #fff;
    margin-top: 10px;
`;

export const Line = styled(BorderlessButton)`
    flex-direction: row;
    margin: 20px 0 20px;
    align-items: center;
`;

export const ListStore = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false
})`
    margin-top: 10px;
    padding: 0 20px;  
`;


export const Name = styled.Text`
    flex: 1;
    font-size: 20px;
    color: #202223;
    margin-left: 10px;
`;

export const Separator = styled.View`
    border-bottom-width: ${StyleSheet.hairlineWidth}px; 
    border-bottom-color: rgba(70, 73, 76, 0.2); 
`;