import styled from 'styled-components';

export const Grafic1 = styled.div`
    display: flex;
    margin-top: 20px;
`;

export const Title = styled.strong`
        font-size: 20px;
        color: #fff;
        font-weight: bold;
        position: absolute;
        margin: 10px 0 40px 40px;
`;

export const Top = styled.div``;

export const FirtFrame = styled.table`
    margin: 100px 40px 40px 40px;
    background: rgb(255, 255, 255, 1);
    height: 600px;
    width: 800px;
    border-radius: 5px;
    border-collapse: collapse;

    thead th {
        color: #6c757d;
        font-size: 16px;
        padding: 12px;
        text-align: center;
        background: #fff;
    }

    tbody td {
        padding: 12px;
        text-align: center;
        border-top: 1px solid rgba(242, 244, 250, 1);

        p {
            color: rgb(108, 117, 125);
            font-size: 16px;
        }

        img {
            width: 80px;
            height: 50px;
            border-radius: 4px;
        }
    }

    div { 
        padding: 20px;
    }

`;

export const Desc = styled.h4`
    position: absolute;
    margin-top: 660px;
    margin-left: 70px;      
    color: rgb(108, 117, 125, 0.8);
`;

export const Side = styled.div`
    display: flex;
    background: #fff;
`;

export const Contents = styled.div`
    width: 800px;
    height: 90px;
    position: absolute;
    display: flex;
    justify-content: space-between;
    background: #fff;
    margin: 20px 0px 0px 40px;
    padding: 10px;
    border-radius: 4px;

    caption {
        font-size: 20px;
        color: #666666;
        font-weight: bold;
        padding: 20px;
    }

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export const SearchBar = styled.input`
    width: 200px;
    height: 40px;
    background: #fff;
    color: #666666;
    margin: 8px 0;
    padding: 10px;
    border: none;
    border-bottom: 2px solid rgba(242, 244, 250, 1);
    
    ::placeholder {
        color: #666666;
    }
`;
