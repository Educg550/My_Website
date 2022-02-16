import { NextPage } from "next";

import { BackgroundWrapper } from "../../src/components/BackgroundWrapper";
import { Header } from "../../src/components/Header";
import { Text } from "../../src/components/Text";
import { Title } from "../../src/components/Title";
import Head from "../../src/infra/components/Head";

export interface PostProps {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  paragraphs: string[];

  thumbnail: string; // Thumb src
  cover: string; // Cover src
}

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://my-json-server.typicode.com/Educg550/My_Website/posts"
  );
  const data = await res.json();

  const paths = data.map((post: PostProps) => {
    return {
      params: { id: post.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const res = await fetch(
    `https://my-json-server.typicode.com/Educg550/My_Website/posts/${id}`
  );
  const data = await res.json();

  return {
    props: { post: data },
  };
};

const Post: NextPage<PostProps> = ({
  id,
  slug,
  title,
  subtitle,
  thumbnail,
  paragraphs,
  cover,
}) => {
  return (
    <BackgroundWrapper>
      <Head headTitle={`${slug} | DogeDev`} />

      <Header headerTitle={slug} />
      <Title>{title}</Title>

      {paragraphs.map((data, key) => {
        return (
          <div key={key}>
            <Text>{data}</Text>
          </div>
        );
      })}
    </BackgroundWrapper>
  );
};

export default Post;
