import { Direction, ThemeOptions } from "@mui/material";
import keyframesType from "./KeyframesType";
import {
  IMixins as IMixinsCustom,
  IMixinsOptions as IMixinsOptionsCustom,
} from "./MixinsInterface";

export interface IThemeConfig {
  direction?: Direction;
  theme?: string;
}

declare module "@mui/material/styles" {
  // eslint-disable-next-line no-unused-vars
  interface BreakpointOverrides {
    xs: true;
    ssm: true;
    sm: true;
    md: true;
    mid: true;
    lg: true;
    xl: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
  // eslint-disable-next-line no-unused-vars
  interface Theme {
    keyframesList: keyframesType;
  }
  // eslint-disable-next-line no-unused-vars
  interface ThemeOptions {
    keyframesList?: keyframesType;
  }
  // eslint-disable-next-line no-unused-vars
  interface Mixins extends IMixinsCustom {}
  // eslint-disable-next-line no-unused-vars
  interface MixinsOptions extends IMixinsOptionsCustom {}
}

export interface IExtendedThemeOptions extends ThemeOptions {
  keyframesList: keyframesType;
}
