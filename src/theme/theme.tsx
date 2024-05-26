import {
  Theme,
  ThemeOptions,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import { keyframesList } from "./assets/keyframesList";
import mixins from "./assets/mixinsList";
import { IExtendedThemeOptions, IThemeConfig } from "./types/ThemeInterface";

const baseThemeOptions: IExtendedThemeOptions = {
  breakpoints: {
    values: {
      xs: 0,
      ssm: 530,
      sm: 600,
      tablet: 640,
      mid: 750,
      md: 900,
      laptop: 1000,
      desktop: 1100,
      lg: 1200,
      xl: 1536,
    },
  },

  palette: {
    primary: { main: "#fff" },
  },
  components: {},
  mixins,
  keyframesList,
};

const lightThemeOptions: ThemeOptions = {
  components: {},
};

const darkThemeOptions: ThemeOptions = {
  components: {},
};

export const createCustomTheme = (config: IThemeConfig = {}): Theme => {
  let themeOptions =
    config.theme === "light" ? lightThemeOptions : darkThemeOptions;

  if (!themeOptions) {
    console.warn(new Error(`The theme ${config.theme} is not valid`));
    themeOptions = lightThemeOptions;
  }

  const theme = responsiveFontSizes(
    createTheme(
      { ...baseThemeOptions },
      { ...themeOptions },
      {
        direction: config.direction,
      },
    ),
  );

  return theme;
};
