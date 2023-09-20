import { Tile } from "../../common/Tile";
import { Introduction } from "./Introduction";
import {
  anotherExampleSocialmediaTools,
  exampleSocialmediaTools,
} from "./exampleTools";
import {
  MainContainer,
  SubTitle,
  SubTitleContainer,
  SubTitleText,
  TileListContainer,
  TileListWrapper,
  Title,
} from "./styled";
import { nanoid } from "nanoid";

export const Main = () => (
  <MainContainer>
    <Introduction />
    <SubTitleContainer>
      <SubTitle>Most Popular Tools</SubTitle>
      <SubTitleText>
        Explore the trending tools to create your copies fast
      </SubTitleText>
    </SubTitleContainer>
    <TileListWrapper>
      {
        <>
          {exampleSocialmediaTools.map(({ title, tile }) => (
            <div key={nanoid()}>
              <Title>{title}</Title>
              <TileListContainer>
                {tile.map(({ mainIcon, trendingIcon, title, description }) => (
                  <Tile
                    key={nanoid()}
                    mainIcon={mainIcon}
                    trendingIcon={trendingIcon}
                    title={title}
                    description={description}
                  />
                ))}
              </TileListContainer>
            </div>
          ))}
        </>
      }
      {
        <>
          {anotherExampleSocialmediaTools.map(({ title, tile }) => (
            <div key={nanoid()}>
              <Title>{title}</Title>
              <TileListContainer>
                {tile.map(({ mainIcon, trendingIcon, title, description }) => (
                  <Tile
                    key={nanoid()}
                    mainIcon={mainIcon}
                    trendingIcon={trendingIcon}
                    title={title}
                    description={description}
                  />
                ))}
              </TileListContainer>
            </div>
          ))}
        </>
      }
    </TileListWrapper>
  </MainContainer>
);
