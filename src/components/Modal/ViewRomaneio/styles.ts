import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.backgound_screen};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.poppins};
  width: 60vw;
  height: 60vh;
  padding: 16px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
`;

export const RomaneioData = styled.div`
 display: flex;
 justify-content: space-around;
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 16px;
`;

export const Carga = styled.div`
 display: flex;
 flex-direction: column;
 grid-template-columns: 1fr 1fr;
 gap: 16px;
 align-self: flex-start;
 justify-content: space-around;
 
`;

const Title = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;

  & > span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const TitlePrimary = styled(Title)`
  font-size: ${({ theme }) => theme.fontSize.text_pp};
  gap: 6px;
`;

export const TitleSecondary = styled(Title)`
  font-size: ${({ theme }) => theme.fontSize.text_m};
  justify-content: space-between;
  gap: 30px;
`

export const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
`;


