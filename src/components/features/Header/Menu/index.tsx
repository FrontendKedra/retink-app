import { Container, Icon } from "./styled";
import bell from "./images/bell.svg";
import calendar from "./images/calendar.svg";
import profile from "../../../common/images/profile.svg"

export const Menu = () => (
  <Container>
    <Icon src={calendar} alt="Calendar logo" />
    <Icon src={bell} alt="Bell logo" />
    <Icon src={profile} alt="Profile logo" />
  </Container>
);
