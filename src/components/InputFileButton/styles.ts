import styled from "styled-components";

export const InputFileContainer = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.poppins};
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 6px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }
`;

export const InputFileComponent = styled.input.attrs({
  id: "file-input",
  accept: ".xlsx, .xls, .csv",
  type: "file",
})`
  cursor: pointer;

`;

export const Title = styled.label`
  font-size: ${({ theme }) => theme.fontSize.text_p};
`;
