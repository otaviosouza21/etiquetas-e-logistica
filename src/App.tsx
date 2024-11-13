import "./App.css";
import theme from '../src/global/styles/theme'
import Home from "./pages/home";
import { ThemeProvider } from "styled-components";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
