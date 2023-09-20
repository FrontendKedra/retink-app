import {
  ActionContainer,
  Button,
  CoinsContainer,
  CoinsIcon,
  HeaderContainer,
  RectangleInput,
  SearchContainer,
} from "./styled";
import coins from "./images/coins.svg";
import { Menu } from "./Menu";
import { Input } from "../../common/Input";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const setMobileState = () => {
    window.innerWidth > 900 ? setIsMobile(false) : setIsMobile(true);
  };

  useEffect(() => {
    window.addEventListener("resize", setMobileState);

    return () => {
      window.removeEventListener("resize", setMobileState);
    };
  }, []);

  return (
    <HeaderContainer>
      <SearchContainer>
        {!isMobile ? <Input /> : null}
        <ActionContainer>
          <Button>Create Content</Button>
          <CoinsContainer>
            <RectangleInput type="number" placeholder="20" />
            <CoinsIcon src={coins} alt="Coins Icon" />
          </CoinsContainer>
        </ActionContainer>
      </SearchContainer>
      <Menu />
    </HeaderContainer>
  );
};
