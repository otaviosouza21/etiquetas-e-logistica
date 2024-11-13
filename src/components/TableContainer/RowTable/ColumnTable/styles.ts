import styled from "styled-components";

interface Props {
  flex: number;
}

export const Container = styled.span<Props>`
  flex: ${({flex})=> flex};
`;
