import NextHead from "next/head";
import { ReactNode, useContext } from "react";
import { ThemeContext } from "styled-components";

interface HeadProps {
  headTitle: string;
  children?: ReactNode;
}

const Head: React.FC<HeadProps> = ({ headTitle, children }) => {
  const { title } = useContext(ThemeContext);

  return (
    <NextHead>
      <title>{headTitle} | DogeDev</title>

      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <link
        rel="icon"
        href={
          title === "light" ? "/icons/favicon.ico" : "/icons/favicon-dark.ico"
        }
      />
      {children}
    </NextHead>
  );
};

export default Head;
