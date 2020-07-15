import styled from 'styled-components';

export const Grid = styled.div`    
    position: absolute;
    margin-top: 650px;
    margin-left: 600px;      
    width: 200px;

    button {
        background: rgba(255, 255, 255, 1);
        width: 30px;
        height: 30px;
        border-radius: 15px;
        border: none;
        float: left;
        color: #666666;
        font-size: 12px;
        margin-left: 5px;

        &:hover {
            background: #8D59C1;
            color: #fff;
        }

        &:focus {
            background: #8D59C1;
            color: #fff;
        }
    }
`;