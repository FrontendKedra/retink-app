import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  padding: 28px 36px 40px 36px;
  display: grid;
  transition: 0.1s;

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    padding: 14px 22px 26px 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 100%;
  }

  &:hover {
    transform: scale(1.03);
  }
  &:active {
    transform: scale(1.04);
  }
`;

export const IconsContainer = styled.p`
  display: flex;
  justify-content: space-between;
  margin: 0 0 28px 0;
`;

export const MainIcon = styled.img`
  width: 19px;
  height: 19px;
`;

export const TrendingIcon = styled.img`
  width: 20px;
  height: 16px;
`;

export const TileTitle = styled.h4`
  font-weight: 600;
  font-size: 28px;
  margin: 0 0 12px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    color: ${({ theme }) => theme.colors.haiti};
  }
`;

export const Description = styled.article`
  color: ${({ theme }) => theme.colors.jumbo};
  font-weight: 500;
  font-size: 22px;

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 12px;
  }
`;
