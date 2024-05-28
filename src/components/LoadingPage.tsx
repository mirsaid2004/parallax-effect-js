import { HTMLAttributes, useRef } from "react";
import { makeStyles } from "../styles";
import BlurryAffect from "./animation/BlurryAffect";
import logo from "../assets/logo_tashkent-min.webp";
type LoadingPageType = HTMLAttributes<HTMLDivElement>;
const useStyles = makeStyles()((theme) => ({
  loader_wraper: {
    position: "relative",
    overflow: "hidden",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    width: "100%",
    backgroundColor: "#222",
  },
  loader: {
    position: "relative",
    zIndex: "10",
    marginTop: "20px",
    fontWeight: "bold",
    fontFamily: '"Times New Roman", Times, serif !important',
    fontSize: "60px",
    lineHeight: "1.4em",
    letterSpacing: "calc(15.5ch + 10px)",
    width: "13.5ch",
    overflow: "hidden",
    whiteSpace: "nowrap",
    color: "transparent",
    textShadow:
      "calc(0 * 15.5ch) 0 #fff,calc(-1 * 15.5ch) 0 #fff,calc(-2 * 15.5ch) 0 #fff,calc(-3 * 15.5ch) 0 #fff,calc(-4 * 15.5ch) 0 #fff,calc(-5 * 15.5ch) 0 #fff,calc(-6 * 15.5ch) 0 #fff,calc(-7 * 15.5ch) 0 #fff,calc(-8 * 15.5ch) 0 #fff,calc(-9 * 15.5ch) 0 #fff",
    "&::before": {
      content: '"TASHKENT"',
      color: "#fff",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
      letterSpacing: "calc(18ch + 10px)",
      width: "16ch",
      textShadow:
        "calc(0 * 18ch) 0 #fff, calc(-1 * 18ch) 0 #fff, calc(-2 * 18ch) 0 #fff, calc(-3 * 18ch) 0 #fff, calc(-4 * 18ch) 0 #fff, calc(-5 * 18ch) 0 #fff, calc(-6 * 18ch) 0 #fff, calc(-7 * 18ch) 0 #fff, calc(-8 * 18ch) 0 #fff, calc(-9 * 18ch) 0 #fff",
    },
  },
  logo: {
    width: "50%",
    maxWidth: "200px",
    height: "auto",
    animation: `${theme.keyframesList.imgLogo} 2s infinite alternate`,
    zIndex: 10,
  },
}));

const LoadingPage = ({ ...rest }: LoadingPageType) => {
  const { classes } = useStyles();
  const loaderRef = useRef<HTMLDivElement>(null);
  return (
    <div className={classes.loader_wraper} ref={loaderRef} {...rest}>
      <img src={logo} alt="logo" loading="lazy" className={classes.logo} />
      <div className={classes.loader}></div>
      <BlurryAffect externalRef={loaderRef} />
    </div>
  );
};

export default LoadingPage;
