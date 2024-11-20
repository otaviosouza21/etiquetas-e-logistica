import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
`;

export const Input = styled.input.attrs({
  placeholder: "Documento",
})`
  border: none;  
  width: 300px;
  outline: none;padding: 6px 16px;
  border-radius: 20px;
  font-size: 1.2rem;
  font-family: ${({ theme }) => theme.fonts.poppins};
  background:${({ theme }) => theme.colors.text};

  &::placeholder{
    color: #E1E1E1;
    font-size: 1rem
 }

 
 &:hover {
    transform: scale(1.02);
    transition: .2s;
    box-shadow: 1px 1px 10px 1px #333333;
  }

  &:active{
    transform: scale(1);
  }
`;
