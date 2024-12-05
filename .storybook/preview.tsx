import type { Preview } from "@storybook/react";
import { theme } from "../src/styled/theme";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { GlobalStyles } from "../src/styled/GlobalStyles";
import { ThemeProvider } from "styled-components";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../src/state/store";
const preview: Preview = {
     parameters: {
          controls: {
               matchers: {
                    color: /(background|color)$/i,
                    date: /Date$/i,
               },
          },
     },

     decorators: [
          withThemeFromJSXProvider({
               GlobalStyles,
          }),

          (Story) => {
               return (
                    <ThemeProvider theme={theme}>
                         <Provider store={store}>
                              <Story />
                         </Provider>
                    </ThemeProvider>
               );
          },
     ],
};

export default preview;
