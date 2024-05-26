import { useRef } from "react";
import BlurryAffect from "../../components/animation/BlurryAffect";
import { makeStyles } from "../../styles";
import Png404 from "../../assets/404-min.webp";
import { Link } from "react-router-dom";

const useStyles = makeStyles()((theme) => ({
  error_page: {
    height: "100vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  img_404: {
    width: "100%",
    height: "auto",
    maxWidth: "500px",
  },
  error_page_text: {
    width: "fit-content",
    fontWeight: "bold",
    fontFamily: "monospace",
    textShadow: "0 0 0 rgb(255 0 0), 0 0 0 rgb(0 255 0), 0 0 0 rgb(0 0 255)",
    fontSize: "50px",
    animation: `${theme.keyframesList.l32} 1s infinite cubic-bezier(0.5,-2000,0.5,2000)`,
    marginBottom: "20px",

    "&::before": {
      content: "'Error'",
      color: "#fff",
    },
  },
  page_content: {
    zIndex: 10,
  },
  back_link: {
    color: "#fff",
  },
}));

function ErrorPage() {
  const { classes, cx } = useStyles();
  const externalRef = useRef<HTMLDivElement>(null);
  return (
    <div className={classes.error_page} ref={externalRef}>
      <div className={cx(classes.page_content, classes.error_page_text)}></div>
      <img
        src={Png404}
        alt="404"
        className={cx(classes.page_content, classes.img_404)}
      />
      <Link to={"/"} className={cx(classes.page_content, classes.back_link)}>
        <h2>Return to main page</h2>
      </Link>
      <div className="index">
        <BlurryAffect isBrowserBlob={true} externalRef={externalRef} />
      </div>
    </div>
  );
}

export default ErrorPage;
