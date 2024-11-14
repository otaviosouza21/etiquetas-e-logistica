import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #2F2F2F;
  padding: 6px 0;
  align-items: center;
  justify-content: center;

 

  &:last-child {
    border-bottom: none;
  }

  &:hover{
    background-color: #2F2F2F ;
  }
`;
