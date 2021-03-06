import "styled-components";

// Declaração global da tipagem do tema
declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;

      background: string;
      secondaryBackground: string;

      text: string;

      gray: string;
      red: string;
      lightBlue: string;

      dark: string;
      light: string;
    };
  }
}
