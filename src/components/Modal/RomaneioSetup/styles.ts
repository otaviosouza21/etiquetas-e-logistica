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

export const Municipios = styled.ul`
  display: flex;
  justify-content: space-around;
  gap: 10px;
`;

export const MunicipioContainer = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  font-size: ${({theme})=> theme.fontSize.text_m};


  & > span{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: ${({theme})=> theme.colors.primary};
    background-color: ${({theme})=> theme.colors.backgound_page};
    width: 30px;
    height: 30px;
    padding: 4px;
    cursor: pointer;
    box-shadow: 1px 1px 5px 1px #00000040;
  }

  & > span:hover{
    transform: scale(1.03);
  }
`;
