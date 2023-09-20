import styled from "styled-components";

export const MainContainer = styled.section`
  padding: 32px 36px 10px 36px;

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    padding: 32px 12px 10px 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0;
  }
`;

export const SubTitleContainer = styled.article`
  display: grid;
  gap: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-left: 24px;
  }
`;

export const SubTitle = styled.h2`
  font-weight: 600;
  font-size: 30px;
  margin: 20px 0 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    font-size: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 20px;
  }
`;

export const SubTitleText = styled.p`
  margin: 0 0 16px 0;
  font-weight: 500;
  font-size: 26px;
  color: ${({ theme }) => theme.colors.mulledWine};

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    color: ${({ theme }) => theme.colors.manatee};
  }
`;

export const TileListWrapper = styled.section`
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.gray};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-left: 20px;
  }
`;

export const TileListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 48px;
  padding: 0 8px;
  justify-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    gap: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Title = styled.h3`
  margin: 0;
  padding: 24px 0 18px 72px;

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    padding: 12px 0 18px 6px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    color: ${({ theme }) => theme.colors.mulledWine};
  }
`;
