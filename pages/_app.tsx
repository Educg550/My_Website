import "../styles/fonts.scss";
import type { AppProps } from "next/app";
import { DefaultTheme, ThemeProvider } from "styled-components";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";

import { createContext, useState } from "react";

import GlobalStyle from "../styles/global";

interface StackProps {
  toggleTheme(): void;
}

export const StackContext = createContext({} as StackProps);

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<DefaultTheme>(light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <StackContext.Provider value={{ toggleTheme }}>
        <GlobalStyle />
        <Component {...pageProps} />
      </StackContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
