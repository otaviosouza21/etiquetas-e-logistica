import styled from "styled-components";

export const Container = styled.button`
  align-items: center;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  display: flex;
  font-family: ${({ theme }) => theme.fonts.poppins};
  gap: 6px;
  justify-content: center;
  padding: 16px 22px;
  border: none;
  box-shadow: 1px 1px 5px 1px #333333;
  cursor: pointer;
  transition: .1s;

  &:hover {
    transform: scale(1.02);
    transition: .2s;
    box-shadow: 1px 1px 10px 1px #333333;
  }

  &:active{
    transform: scale(1);
  }
`;

export const InputFileComponent = styled.input.attrs({
    id: "file-input",
    accept: ".xlsx, .xls, .csv",
    type: "file",
  })`
    cursor: pointer;
    display: none;
  `;

  export const Title = styled.label`
  cursor: pointer;
  `