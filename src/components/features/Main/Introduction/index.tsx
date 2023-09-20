import {
  BackgroundIcon,
  Button,
  Container,
  Heading,
  InformationText,
  InformationalTextsContainer,
  IntroductionHeader,
  Option,
  Select,
  SubHeader,
} from "./styled";
import backgroundIcon from "./images/backgroundIcon.svg";
import { useEffect, useState } from "react";
import { Input } from "../../../common/Input";
import square from "./images/square.svg";
import profile from "../../../common/images/profile.svg";

export const Introduction = () => {
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
    <Container>
      {isMobile ? (
        <Heading>
          <img src={square} alt="Square logo" />
          <Select>
            <Option value="Zara ventures">Zara ventures</Option>
            <Option value="example">Another example</Option>
          </Select>
          <img src={profile} alt="Profile logo"/>
        </Heading>
      ) : null}
      <IntroductionHeader>Hey James!</IntroductionHeader>
      <SubHeader>Lets create something awesome today ✨💫</SubHeader>
      <Button>Start Creating</Button>
      <BackgroundIcon src={backgroundIcon} />
      {isMobile ? (
        <Input />
      ) : (
        <Select>
          <Option value="Zara ventures">Zara ventures</Option>
          <Option value="example">Another example</Option>
        </Select>
      )}
      <InformationalTextsContainer>
        <InformationText>
          You should have more engagement by 6pm today, try posting then. 📆
        </InformationText>
        <InformationText>
          Try our SEO optimization tool to increase engagement by 40% 🔥
        </InformationText>
      </InformationalTextsContainer>
    </Container>
  );
};
