import styled from "styled-components";

export const Container = styled.article`
  background-color: ${({ theme }) => theme.colors.selago};
  border-radius: 20px;
  padding: 42px;
  position: relative;
  display: grid;

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    padding: 42px 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    border-radius: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    justify-items: center;
    padding: 12px 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    justify-items: unset;
  }
`;

export const IntroductionHeader = styled.h1`
  font-weight: 500;
  font-size: 64px;
  margin: 0 0 24px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    font-size: 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 42px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin: 0 0 12px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    justify-items: unset;
    margin: 16px 0 12px 0;
    font-size: 32px;
  }
`;

export const SubHeader = styled.h3`
  font-weight: 500;
  margin: 0 0 58px 0;
  font-size: 28px;

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 16px;
  }
`;

export const Button = styled.button`
  border: 2px solid ${({ theme }) => theme.colors.royalBlue};
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.royalBlue};
  font-weight: 600;
  padding: 14px 48px 14px 48px;
  width: fit-content;
  font-size: 20px;
  transition: 0.1s;

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 12px;
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

export const BackgroundIcon = styled.img`
  position: absolute;
  height: 100%;
  width: 869.29px;
  top: 0;
  right: 20px;
  pointer-events: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const Select = styled.select`
  position: absolute;
  top: 28px;
  right: 80px;
  border: none;
  font-size: 20px;
  background: radial-gradient(
    135.46% 135.46% at 49.62% 39.93%,
    #ffffff 29.48%,
    #d4c8f8 100%
  );
  border-radius: 10px;
  padding: 12px 8px 12px 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    right: 36px;
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    position: unset;
  }
`;

export const Option = styled.option``;

export const InformationalTextsContainer = styled.div`
  display: grid;
  gap: 24px;
  position: absolute;
  top: 120px;
  right: 120px;
  font-size: 20px;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.1)
  );

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    right: 110px;
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 12px;
    right: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    display: none;
  }
`;

export const InformationText = styled.span`
  font-weight: 500;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    display: none;
  }
`;

export const Heading = styled.div`
  display: grid;
  grid-template-columns: repeat(3, min-content);
  gap: 60px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    gap: 100px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    gap: 68px;
    justify-content: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallest}) {
    gap: 56px;
    justify-content: unset;
  }
`;
