import "./App.css";
import theme from "../src/global/styles/theme";
import Home from "./pages/home";
import { ThemeProvider } from "styled-components";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import EtiquetasRomaneio from "./components/EtiquetasRomaneio";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="romaneio-etiquetas" element={<EtiquetasRomaneio />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
