import { TileInterface } from "../../features/Main/exampleTools";
import { Container, Description, IconsContainer, MainIcon, TileTitle, TrendingIcon } from "./styled";

export const Tile = ({
  title,
  description,
  mainIcon,
  trendingIcon,
}: TileInterface) => {
  return (
    <Container>
      <IconsContainer>
        <MainIcon src={mainIcon} alt={`image for ${title}`} />
        <TrendingIcon src={trendingIcon} alt="Trending Icon" />
      </IconsContainer>
      <TileTitle>{title}</TileTitle>
      <Description>{description}</Description>
    </Container>
  );
};
