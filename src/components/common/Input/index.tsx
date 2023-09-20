import {
  Container,
  FilterIcon,
  RemoveroundIcon,
  SearchIcon,
  SearchInput,
} from "./styled";
import filter from "./images/filter.svg";
import removeRound from "./images/removeRound.svg";
import search from "./images/search.svg";

export const Input = () => {
  return (
    <Container>
      <SearchInput placeholder="Search for templates, projects, etc"></SearchInput>
      <FilterIcon src={filter} alt="Filter icon" />
      <RemoveroundIcon src={removeRound} alt="RemoveRound icon" />
      <SearchIcon src={search} alt="Search icon" />
    </Container>
  );
};
