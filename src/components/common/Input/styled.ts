import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  width: fit-content;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    top: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    justify-self: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallest}) {
    justify-self: unset;
  }
`;

export const SearchInput = styled.input`
  padding: 12px 0 12px 46px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.athensGray};
  box-shadow: 0px 7px 64px 0px #00000012;
  font-size: 20px;
  width: 555px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.mulledWine};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 10px;
    width: 500px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    max-width: 332px;
  }
`;

export const FilterIcon = styled.img`
  position: absolute;
  right: 36px;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallest}) {
    display: none;
  }
`;

export const RemoveroundIcon = styled.img`
  position: absolute;
  right: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallest}) {
    display: none;
  }
`;

export const SearchIcon = styled.img`
  position: absolute;
  left: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallest}) {
    width: 20px;
    height: 20px;
  }
`;
