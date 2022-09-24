import { BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from "./context/themeProvider";
import { Router } from "./routes";

export const App = () => {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <Router />
      </ThemeContextProvider>
    </BrowserRouter>
  );
};
