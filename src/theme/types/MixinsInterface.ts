import { CSSProperties } from "react";
import { Keyframes } from "@emotion/react";
export interface IMixins {
  parallax: CSSProperties;
  renderingElement: (
    // eslint-disable-next-line no-unused-vars
    animationDuration: string,
    // eslint-disable-next-line no-unused-vars
    animationDelay: string,
    // eslint-disable-next-line no-unused-vars
    animationName: Keyframes,
    // eslint-disable-next-line no-unused-vars
    animationDirection: string,
  ) => CSSProperties;
  // eslint-disable-next-line no-unused-vars
  highlightedCard: (
    // eslint-disable-next-line no-unused-vars
    animationName: Keyframes,
    // eslint-disable-next-line no-unused-vars
    content: string,
    // eslint-disable-next-line no-unused-vars
    width: string,
    // eslint-disable-next-line no-unused-vars
    height: string,
  ) => {
    "&::after": CSSProperties;
    "&::before": CSSProperties;
  };
  highlightedCardSingle: (
    // eslint-disable-next-line no-unused-vars
    animationName: Keyframes,
    // eslint-disable-next-line no-unused-vars
    content: string,
    // eslint-disable-next-line no-unused-vars
    width: string,
    // eslint-disable-next-line no-unused-vars
    height: string,
  ) => {
    "&::after": CSSProperties;
    "&::before": CSSProperties;
  };
}

export interface IMixinsOptions {
  parallax?: CSSProperties;
  renderingElement?: (
    // eslint-disable-next-line no-unused-vars
    animationDuration: string,
    // eslint-disable-next-line no-unused-vars
    animationDelay: string,
    // eslint-disable-next-line no-unused-vars
    animationName: Keyframes,
    // eslint-disable-next-line no-unused-vars
    animationDirection: string,
  ) => CSSProperties;
  // eslint-disable-next-line no-unused-vars
  highlightedCard?: (
    // eslint-disable-next-line no-unused-vars
    animationName: Keyframes,
    // eslint-disable-next-line no-unused-vars
    content: string,
    // eslint-disable-next-line no-unused-vars
    width: string,
    // eslint-disable-next-line no-unused-vars
    height: string,
  ) => {
    "&::after": CSSProperties;
    "&::before": CSSProperties;
  };
  highlightedCardSingle?: (
    // eslint-disable-next-line no-unused-vars
    animationName: Keyframes,
    // eslint-disable-next-line no-unused-vars
    content: string,
    // eslint-disable-next-line no-unused-vars
    width: string,
    // eslint-disable-next-line no-unused-vars
    height: string,
  ) => {
    "&::after": CSSProperties;
    "&::before": CSSProperties;
  };
}
