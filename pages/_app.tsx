import "../styles/fonts.scss";
import type { AppProps } from "next/app";
import { DefaultTheme, ThemeProvider } from "styled-components";
import usePersistedState from "../utils/usePersistedState";

import light from "../styles/themes/light";
import dark from "../styles/themes/dark";
import { createContext } from "react";

import GlobalStyle from "../styles/global";

interface StackContextProps {
  toggleTheme(): void;
}

export const StackContext = createContext<StackContextProps>(
  {} as StackContextProps
);

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

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
