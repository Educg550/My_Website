import "../styles/fonts.scss";
import type { AppProps } from "next/app";
import usePersistedState from "../utils/usePersistedState";
import { DefaultTheme, ThemeProvider } from "styled-components";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";

import { createContext } from "react";

interface gg {
  toggleTheme(): void;
}

export const StackContext = createContext({} as gg);

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <StackContext.Provider value={{ toggleTheme }}>
        <Component {...pageProps} />
      </StackContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
