import styled from "styled-components";

interface NavProps {
  isActive?: boolean;
}

export const Container = styled.ul`
  background-color: ${({ theme }) => theme.colors.bg_screen_secondary};
  font-family: "${({ theme }) => theme.fonts.poppins}";
  display: flex;
  padding: 6px 6px;
  justify-content: space-between;
  border-radius: 40px;
  max-width: 250px;
  box-shadow: 2px 2px 2px 0px #242424;
`;

export const Nav = styled.li.attrs<NavProps>(({ isActive, ...rest }) => ({
  ...rest,
}))<NavProps>`
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.backgound_page : theme.colors.text};
  font-weight: 700;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : ""};
  padding: 12px;
  border-radius: 40px;
  cursor: pointer;
  transition: 0.2s cubic-bezier();
`;
