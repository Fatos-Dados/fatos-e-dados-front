import styled from "styled-components";
import { colors } from "../../../utils/colors";

export const Container = styled.main`
    width: 100vw;
    height: 100vh;
    border-radius: 10px;
    padding-bottom: 10px;

    @media(min-width: 420px){
        width: 375px;
        height: 450px;
    };

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    background: transparent;
    box-shadow: 
     rgba(0, 0, 0, 0.25) 0px 54px 55px,
     rgba(0, 0, 0, 0.12) 0px -12px 30px, 
     rgba(0, 0, 0, 0.12) 0px 4px 6px, 
     rgba(0, 0, 0, 0.17) 0px 12px 13px, 
     rgba(0, 0, 0, 0.09) 0px -3px 5px;
    
    img {
        width: 245px;
        margin-block-end: -90px;
    }

    span {
        color: ${colors.primary[1]};
        cursor: default;
    }
`

export const ChildrenContent = styled.div`
    width: 100%;
    height: 'fit-content';
`