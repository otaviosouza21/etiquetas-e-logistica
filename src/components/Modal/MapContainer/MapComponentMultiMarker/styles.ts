import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.backgound_screen};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.poppins};
  width: 80vw;
  height: 80vh;
  padding: 16px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
`;



export const CloseMap = styled.span`
    color: white;
    font-family: ${({theme})=> theme.fonts.poppins};
    font-size: 2rem;
    text-decoration: underline;
    position: absolute;
    bottom: 100px
`