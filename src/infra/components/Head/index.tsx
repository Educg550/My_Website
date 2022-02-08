import NextHead from "next/head";

interface HeadProps {
  title: string;
}

const Head: React.FC<HeadProps> = ({ title }) => {
  return (
    <NextHead>
      <title>{title} | DogeDev</title>
      <meta
        name="description"
        content="@Educg550 | Página pessoal feita com ReactJS e Next.js"
      />
      <link rel="icon" href="/icons/favicon.ico" />
    </NextHead>
  );
};

export default Head;
