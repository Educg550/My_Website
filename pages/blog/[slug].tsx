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

  const paths = data.map(
    ({ slug }: PostProps) => {
      return {
        params: { slug: slug },
      };
    }
  );

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(
    `https://my-json-server.typicode.com/Educg550/My_Website/posts`
  );
  const data = await res.json();
  let id = 0

  for (let i = 0; i < data.length; i++) {
    if (data[i].slug == context.params?.slug) {
      id = i
      break
    }
  }

  return {
    props: { post: data[id] },
  };
};

const Post = ({ post }: PostPageProps) => {
  const formattedTitle = post.title.toString().substring(post.title.indexOf("-") - 1, 0);

  const textFormat = { textIndent: 25 };

  return (
    <BackgroundWrapper>
      <Head headTitle={`${formattedTitle} | DogeDev`} />

      <Header headerTitle={formattedTitle} />

      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        <CoverImage
          src={`/images/posts/${post.id.toString()}-cover.png`}
          alt="post-cover"
        />
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
