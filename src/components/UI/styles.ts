import styled, { keyframes } from "styled-components";

const slideBar = keyframes`
100% {
    inset: 0
  }
`;

export const Loading = styled.div`
  width: 600px;
  height: 22px;
  border-radius: 20px;
  color: ${({theme})=> theme.colors.primary};
  border: 2px solid;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    margin: 2px;
    inset: 0 100% 0 0;
    border-radius: inherit;
    background: #f4bf00;
    animation: ${slideBar} 2s infinite;
  }
`;
