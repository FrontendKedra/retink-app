import { Aside } from "../Aside";
import { Header } from "../Header";
import { Main } from "../Main";
import {AppContainer, Container } from "./styled";

export const View = () => {
  return (
    <AppContainer>
      <Aside />
      <Container>
        <Header />
        <Main />
      </Container>
    </AppContainer>
  );
};
