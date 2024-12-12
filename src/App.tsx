import "./App.css";
import theme from "../src/global/styles/theme";
import Home from "./pages/home";
import { ThemeProvider } from "styled-components";
import Header from "./global/globalComponents/Header";
import { Routes,Route } from "react-router-dom";
import Romaneio from "./pages/romaneio";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/romaneio" element={<Romaneio />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
