import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    max-width: 600px;
    margin: 50px auto;
    padding-bottom: 20px;

    form {
            display: flex;
            flex-direction: column;
            margin-top: 30px;

            a {
                display: none;
            }

            p {
                color: #fff;
                padding: 15px 0 10px 5px;
                font-size: 16px;
                font-weight: bold;
            }

            input {
                background: rgba(0, 0, 0, 0.1);
                border: 0;
                border-radius: 4px;
                height: 44px;
                padding: 15px;
                color: #DBDBDB;
                margin: 0 0 10px;

                &::placeholder {
                    color: rgba(255, 255, 255, 0.7);
                }

        }

            hr {
                border: 0;
                height: 1px;
                background: rgba(255, 255, 255, 0.2);
                margin: 10px 0 20px;
            }

        };
`;

export const ConfirmButton = styled.button`
margin: 5px 0 0;
height: 44px;
background: #3b9eff;
color: #fff;
border: 0;
border-radius: 4px;
font-size: 16px;
transition: background 0.2s;

    &:hover {
        background: ${darken(0.03, '#3b9eff')}
    }  
`;


export const DeleteButton = styled.button`
    margin: 5px 0 0;
    width: 600px;
    height: 44px;
    background: #BF1818;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

        &:hover {
            background: ${darken(0.03, '#BF1818')}
        }  
`;
