import { MixinsOptions } from "@mui/material";

const mixins: MixinsOptions = {
  parallax: {
    pointerEvents: "none",
    transition: "0.45s cubic-bezier(0.2,0.49,0.32,0.99)",
  },
  renderingElement: (
    animationDuration,
    animationDelay,
    animationName,
    animationDirection,
  ) => ({
    animationName: `${animationName}`,
    animationDuration: animationDuration,
    animationDelay: animationDelay,
    animationDirection: animationDirection,
    animationFillMode: "both",
  }),
  highlightedCard: (animation, content, width, height) => ({
    "&::before": {
      content: content ?? "",
      backgroundImage:
        "conic-gradient(transparent 0deg, #fff 50deg, transparent 100deg, transparent 200deg, #fff 250deg, transparent 300deg)",
      width: "250%",
      height: "250%",
      position: "absolute",
      animation: `${animation} 4s linear infinite`,
      zIndex: -5,
    },
    "&::after": {
      content: content,
      width: width,
      height: height,
      position: "absolute",
      borderRadius: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#ff0052",
      fontSize: "larger",
      letterSpacing: "5px",
      boxShadow: "inset 20px 20px 20px #0000008c",
      transition: "200ms ease-in-out",
      zIndex: -5,
    },
  }),
  highlightedCardSingle: (animation, content, width, height) => ({
    "&::before": {
      content: content ?? "",
      backgroundImage:
        "conic-gradient(rgba(255,255,255,0.6),rgba(255,255,255,0.6))",
      width: "100%",
      height: "100%",
      position: "absolute",
      animation: `${animation} 6s linear infinite`,
      zIndex: -5,
    },
    "&::after": {
      content: content,
      width: width,
      height: height,
      position: "absolute",
      borderRadius: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#ff0052",
      fontSize: "larger",
      letterSpacing: "5px",
      boxShadow: "inset 20px 20px 20px #0000008c",
      transition: "200ms ease-in-out",
      zIndex: -5,
    },
  }),
};

export default mixins;
