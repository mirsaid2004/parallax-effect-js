import Parallax from "../../components/Parallax";
import { makeStyles } from "../../styles";

const useStyles = makeStyles()(() => ({
  section: { width: "100%", minHeight: "100vh", position: "relative" },
}));

function MainPage() {
  const { classes } = useStyles();
  return (
    <section className={classes.section}>
      <Parallax />
    </section>
  );
}

export default MainPage;
