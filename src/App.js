import "./App.css";
import Home from "./pages/home";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
