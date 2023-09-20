import styled from "styled-components";

export const AsideContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.selago};
  display: grid;
  align-content: space-between;
  height: 100vh;
  padding: 14px 8px 36px 8px;
  position: sticky;
  top: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    display: none;
  }
`;

export const TopLogos = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 26px;
  justify-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    display: none;
  }
`;

export const BottomLogos = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 26px;
  justify-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    display: none;
  }
`;

export const RetinkLogo = styled.img`
  padding: 24px;
  border-radius: 6px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    display: none;
  }
`;

export const HomeLogo = styled.img`
  padding: 24px;
  border-radius: 6px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    display: none;
  }
`;

export const ViewGalleryLogo = styled.img`
  padding: 24px;
  border-radius: 6px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    display: none;
  }
`;

export const SettingsLogo = styled.img`
  padding: 24px;
  border-radius: 6px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    display: none;
  }
`;

export const LogoutLogo = styled.img`
  padding: 24px;
  border-radius: 6px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    display: none;
  }
`;
