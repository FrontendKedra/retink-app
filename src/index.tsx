import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(
  <ThemeProvider theme={theme}>
    <App />
    <GlobalStyle/>
  </ThemeProvider>
);

reportWebVitals();
