import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
font-family: ${({theme})=> theme.fonts.poppins};
gap: 6px;
color:${({theme})=> theme.colors.white}
`;

export const IconContainer = styled.div``;

export const Icon = styled.img``;

export const Label = styled.label``;

export const InputContainer = styled.div``;

export const InputText = styled.input`
    width: 100%;
    padding: 6px;
    font-size: 1rem;
    border-radius: 10px;
    outline: none;
    border: none;
    height: 26px;
    background-color: #C1C1C1;
    font-family: ${({theme})=> theme.fonts.poppins};
    border: solid 2px transparent;

    &:active{
        transform: scale(1.01);
        transition: all;
        transition: .3s;
        border: solid 2px ${({theme})=> theme.colors.primary};
    }

    &:focus{
        background-color: #FFFFFF;
        box-shadow: 0px 0px 5px 1px ${({theme})=> theme.colors.primary};
    }
`;
