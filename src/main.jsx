import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

import { ThemeProvider } from "./Context/ThemeContext.jsx";
import { CountriesProvider } from "./Context/CountriesContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CountriesProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </CountriesProvider>
    </BrowserRouter>
  </StrictMode>
);
