import styled from "styled-components";

export const ContainerSvg = styled.svg.attrs({
  width: 30,
  height: 30,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
})`
  align-self: flex-end;
  position: absolute;
  top: 10px;
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
  }
`;
