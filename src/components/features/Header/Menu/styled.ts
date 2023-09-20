import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  padding: 20px 0;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.selago};
  width: 20%;
  background-color: ${({ theme }) => theme.colors.selago};
  box-shadow: 0px -1px 0px 0px #d5d1e066;

  
  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    width: 25%;
  }
`;

export const Icon = styled.img``;
