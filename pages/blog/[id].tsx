import { NextPage } from "next";
import { GetStaticPaths, GetStaticProps } from "next";

import { BackgroundWrapper } from "../../src/components/BackgroundWrapper";
import { ContentHolder } from "../../src/components/ContentHolder";
import { CoverImage } from "../../src/components/CoverImage";
import Footer from "../../src/components/Footer";
import { Header } from "../../src/components/Header";
import { Text } from "../../src/components/Text";
import Head from "../../src/infra/components/Head";

export interface PostProps {
  id: number;
  slug: string;
  title: string;
  cardText: string;
  paragraphs: string[];
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
  const formattedTitle = post.title.substring(post.title.indexOf("-") - 1, 0);
  const textFormat = { textIndent: 25 };

  return (
    <BackgroundWrapper>
      <Head headTitle={`${formattedTitle} | DogeDev`} />

      <Header headerTitle={formattedTitle} />

      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        <CoverImage src={`/images/posts/${post.id.toString()}-cover.png`} />
        <ContentHolder title={post.title}>
          {post.paragraphs.map((data, key) => {
            return (
              <div key={key}>
                <Text
                  style={textFormat}
                  // Usado para aproveitar tags específicas no db.json
                  dangerouslySetInnerHTML={{ __html: data }}
                />
              </div>
            );
          })}
        </ContentHolder>
      </div>

      <Footer />
    </BackgroundWrapper>
  );
};

export default Post;
