import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({theme})=> theme.colors.secondary};
  color: ${({theme})=> theme.colors.white};
  font-family: ${({theme})=> theme.fonts.poppins};
  gap: 6px;
  align-items: center;
  border-radius: 20px;
  padding: 16px 27px;
  display: flex;
  outline: none;
  cursor: pointer;

 &:hover{
  transform: scale(1.02);
 }

`;

export const Title = styled.span`
 font-size: ${({theme})=> theme.fontSize.text_p};
`;
