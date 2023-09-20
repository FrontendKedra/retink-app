interface Theme {
  [index: string]: string;
}

interface ThemeFields {
  colors: Theme;
  breakpoints: Theme;
}

export const theme: ThemeFields = {
  colors: {
    athensGray: "#EBEAEF",
    gray: "#F4F3F6",
    white: "#FFFFFF",
    black: "#000000",
    azureRadiance: "#0085FF",
    alto: "#D0D0D0",
    wildSand: "#F5F5F5",
    violet: "#EAE4FC",
    selago: "#F1EDFD",
    mulledWine: "#463D61",
    royalBlue: "#754DE8",
    perfume: "#D4C8F8",
    jumbo: "#77737F",
    manatee: "#9893A3",
    haiti: "#1D1437",
  },

  breakpoints: {
    small: "530px",
    smallest: "440px",
    mobileMin: "700px",
    mobile: "1200px",
    large: "1360px",
    largest: "1680px",
    mobileMax: "900px",
  },
};
