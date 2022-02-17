import { NextPage } from "next";
import { GetStaticPaths, GetStaticProps } from "next";

import { BackgroundWrapper } from "../../src/components/BackgroundWrapper";
import { ContentHolder } from "../../src/components/ContentHolder";
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

interface PostPageProps {
  post: PostProps;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    `https://my-json-server.typicode.com/Educg550/My_Website/posts/`
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

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  const res = await fetch(
    `https://my-json-server.typicode.com/Educg550/My_Website/posts/${id}`
  );
  const data = await res.json();

  return {
    props: { post: data },
  };
};

const Post: NextPage<PostPageProps> = ({ post }) => {
  return (
    <BackgroundWrapper>
      <Head headTitle={`${post.slug} | DogeDev`} />

      <Header headerTitle={post.title} />
      <ContentHolder title={post.title}>
        {post.paragraphs.map((data, key) => {
          return (
            <div key={key}>
              <Text>{data}</Text>
            </div>
          );
        })}
      </ContentHolder>
      {/* <Title>{post.title}</Title>

      {post.paragraphs.map((data, key) => {
        return (
          <div key={key}>
            <Text>{data}</Text>
          </div>
        );
      })} */}
    </BackgroundWrapper>
  );
};

export default Post;
