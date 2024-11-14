import styled from "styled-components";

export const Container = styled.div`
  font-family: ${({ theme }) => theme.fonts.poppins};
  padding: 10px;
  background-color: white;
  border: solid 1px black;
  display: flex;
  flex-direction: column;
  max-width: 400px;

  gap: 10px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: ${({ theme }) => theme.fontSize.text_m};
  font-weight: bold;
  gap: 10px;
`;

export const TitleHeader = styled.h4`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const TitleBody = styled.h5`
  align-self: flex-start;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Footer = styled.footer``;
export const CodBarra = styled.div`
  display: flex;
  justify-content: center;
`;
