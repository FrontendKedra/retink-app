import {
  AsideContainer,
  BottomLogos,
  HomeLogo,
  LogoutLogo,
  RetinkLogo,
  SettingsLogo,
  TopLogos,
  ViewGalleryLogo,
} from "./styled";
import retink from "./images/retink.svg";
import home from "./images/home.svg";
import viewGallery from "./images/viewGallery.svg";
import settings from "./images/settings.svg";
import logout from "./images/logout.svg";

export const Aside = () => (
  <AsideContainer>
      <TopLogos>
        <RetinkLogo src={retink} alt="Retink Logo" />
        <HomeLogo src={home} alt="Home Logo" />
        <ViewGalleryLogo src={viewGallery} alt="ViewGallery Logo" />
      </TopLogos>
      <BottomLogos>
        <SettingsLogo src={settings} alt="Settings Logo" />
        <LogoutLogo src={logout} alt="Logout Logo" />
      </BottomLogos>
  </AsideContainer>
);
