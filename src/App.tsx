import { useRoutes } from "react-router-dom";
import "./App.css";
import { createCustomTheme } from "./theme/theme";
import routes from "./routes";
import { ThemeProvider } from "@mui/material";

function App() {
  const content = useRoutes(routes);
  const theme = createCustomTheme({
    direction: "ltr",
    theme: "light",
  });
  return (
    <>
      <ThemeProvider theme={theme}>{content}</ThemeProvider>
    </>
  );
}

export default App;
