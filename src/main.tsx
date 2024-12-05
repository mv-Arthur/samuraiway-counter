import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import { GlobalStyles } from "./styled/GlobalStyles.ts";
import { Provider } from "react-redux";
import { store } from "./state/store.ts";
import { ThemeProvider } from "styled-components";
import { theme } from "./styled/theme.ts";

createRoot(document.getElementById("root")!).render(
     <ThemeProvider theme={theme}>
          <Provider store={store}>
               <App />
               <GlobalStyles />
          </Provider>
     </ThemeProvider>,
);
