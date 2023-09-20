import styled from "styled-components";

export const HeaderContainer = styled.section`
  display: flex;
  width: 100%;
  height: 82px;
  top: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    display: none;
  }
`;

export const SearchContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 10px 36px 12px 36px;
  gap: 40px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.athensGray};
  box-shadow: 0px 7px 20px 0px #00000012;
  width: 80%;

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    width: 75%;
    padding: 10px 0 12px 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    display: none;
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-self: end;
  padding-right: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    grid-template-columns: 1fr;
    justify-self: unset;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    display: none;
  }
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.royalBlue};
  border: none;
  padding: 12px 48px 12px 48px;
  border-radius: 18px;
  height: fit-content;
  width: fit-content;
  font-size: 20px;
  transition: 0.1s;

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    display: none;
  }

  &:hover {
    transform: scale(1.02);
  }
  &:active {
    transform: scale(1.03);
  }
`;

export const CoinsContainer = styled.p`
  position: relative;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    display: none;
  }
`;

export const RectangleInput = styled.input`
  background-color: ${({ theme }) => theme.colors.selago};
  border: none;
  border-radius: 16px;
  box-shadow: 0px 7px 20px 0px #00000012;
  font-size: 20px;
  padding: 12px 0 8px 40px;
  font-weight: 600;
  width: 78px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.mulledWine};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 14px;
    padding: 12px 0 8px 42px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 10px;
    padding: 12px 0 8px 42px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    display: none;
  }
`;

export const CoinsIcon = styled.img`
  position: absolute;
  left: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    display: none;
  }
`;
