import NextHead from "next/head";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

interface HeadProps {
  headTitle: string;
}

const Head: React.FC<HeadProps> = ({ headTitle }) => {
  const { title } = useContext(ThemeContext);

  return (
    <NextHead>
      <title>{headTitle} | DogeDev</title>
      <meta
        name="description"
        content="@Educg550 | Página pessoal feita com ReactJS e Next.js"
      />
      <link
        rel="icon"
        href={
          title === "light" ? "/icons/favicon.ico" : "/icons/favicon-dark.ico"
        }
      />
    </NextHead>
  );
};

export default Head;
