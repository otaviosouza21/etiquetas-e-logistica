import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  gap: 20px;
`;
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 20px;
 

`;

export const Logo = styled.img`
  max-width: 500px;
`;

export const SubLogo = styled.p`
  font-family: ${({ theme }) => theme.fonts.poppins};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.text_g};
  position: relative;
`;

export const Form = styled.div`
  background-color: ${({ theme }) => theme.colors.bg_screen_secondary};
  display: flex;
  width: 30%;
  flex-direction: column;
  padding: 30px 40px;
  border-radius: 20px;
  gap: 12px;
`;
export const LogoSecondary = styled.img`
  max-width: 200px;
  align-self: center;
  margin-bottom: 20px;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;


`;

export const LoginOptions = styled.div``;
