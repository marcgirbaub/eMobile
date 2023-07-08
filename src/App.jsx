import { CssBaseline } from "@mui/material";
import ThemeContextProvider from "./redux/contexts/ThemeContextProvider";

const App = () => (
  <ThemeContextProvider>
    <CssBaseline />
  </ThemeContextProvider>
);

export default App;
