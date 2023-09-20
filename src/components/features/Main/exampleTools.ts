import mainEdit from "./images/mainEdit.svg";
import list from "./images/list.svg";
import editOutline from "./images/editOutline.svg";
import trending from "./images/trending.svg";

interface SocialMediaTools {
  title: string;
  tile: TileInterface[];
}

export interface TileInterface {
  mainIcon: string;
  trendingIcon: string;
  title: string;
  description: string;
}

export const exampleSocialmediaTools: SocialMediaTools[] = [
  {
    title: "Social media",
    tile: [
      {
        mainIcon: mainEdit,
        trendingIcon: trending,
        title: "Blog writing",
        description:
          "Generate the best blog post to fit your audience with just few clicks of a button ",
      },
      {
        mainIcon: list,
        title: "Product description",
        trendingIcon: trending,
        description:
          "Instantly generate engaging product descriptions that sell ",
      },
      {
        mainIcon: editOutline,
        title: "Article writer",
        trendingIcon: trending,
        description:
          "Automatically create unique factual articles at the touch of a button ",
      },
      {
        mainIcon: mainEdit,
        title: "Blog writing",
        trendingIcon: trending,
        description:
          "Generate the best blog post to fit your audience with just few clicks of a button ",
      },
    ],
  },
];

export const anotherExampleSocialmediaTools: SocialMediaTools[] = [{
  title: "Blog Writing",
  tile: [
    {
      mainIcon: mainEdit,
      title: "Blog writing",
      trendingIcon: trending,
      description:
        "Generate the best blog post to fit your audience with just few clicks of a button ",
    },
    {
      mainIcon: editOutline,
      title: "Article writer",
      trendingIcon: trending,
      description:
        "Automatically create unique factual articles at the touch of a button ",
    },
    {
      mainIcon: mainEdit,
      title: "Blog writing",
      trendingIcon: trending,
      description:
        "Generate the best blog post to fit your audience with just few clicks of a button ",
    },
    {
      mainIcon: mainEdit,
      title: "Blog writing",
      trendingIcon: trending,
      description:
        "Generate the best blog post to fit your audience with just few clicks of a button ",
    },
    {
      mainIcon: list,
      title: "Blog writing",
      trendingIcon: trending,
      description:
        "Generate the best blog post to fit your audience with just few clicks of a button ",
    },
    {
      mainIcon: mainEdit,
      title: "Blog writing",
      trendingIcon: trending,
      description:
        "Generate the best blog post to fit your audience with just few clicks of a button ",
    },
  ],
}];
