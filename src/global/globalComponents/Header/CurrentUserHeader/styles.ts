import styled from "styled-components";
import { FaRegUser } from "react-icons/fa";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.bg_screen_secondary};
  font-family: "${({ theme }) => theme.fonts.poppins}";
  display: flex;
  padding: 6px 6px;
  justify-content: space-around;
  border-radius: 0 0 20px 20px;
  box-shadow: 2px 2px 2px 0px #242424;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 30px;
  gap: 10px;
`;

export const User = styled.h4`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
`;

export const Icon = styled(FaRegUser).attrs({
  size: 20,
  color: "#F5A811",
})``;
