import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.backgound_screen};
  font-family: ${({ theme }) => theme.fonts.poppins};
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  border-radius: 20px;
`;

export const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
`;
