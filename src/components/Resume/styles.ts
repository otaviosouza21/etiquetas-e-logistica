import styled from "styled-components";

export const Container = styled.div`
  font-family: ${({ theme }) => theme.fonts.poppins};
  background-color: ${({ theme }) => theme.colors.backgound_screen};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  padding: 12px 10px;
  border-radius: 20px;
  margin-top: 20px;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

const ResumeInfo = styled.h4`
  & > span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const CodCarga = styled(ResumeInfo)``;
export const Carregamento = styled(ResumeInfo)``;
export const Valor = styled(ResumeInfo)``;
export const Motorista = styled(ResumeInfo)``;
export const Cargas = styled.ul`
  display: flex;
`;

export const Carga = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  border-left: solid 1px #2f2f2f;
  padding: 0 6px;

  & > span {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:first-child {
    border-left: none;
  }
`;
