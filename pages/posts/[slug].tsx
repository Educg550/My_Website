import { NextPage } from "next";

import { BackgroundWrapper } from "../../src/components/BackgroundWrapper";
import { Header } from "../../src/components/Header";
import Head from "../../src/infra/components/Head";

interface PostProps {
  slug: string;
  title: string;
  subtitle: string;

  thumbnail: string; // Thumb src
  cover: string; // Cover src
}

// export const getStaticPaths = async () => {
//   const res = await fetch("../../src/data/posts");
//   const data = await res.json();

//   const paths = data.map((post: PostProps) => {
//     return {
//       params: { slug: post.slug.toString() },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async () => {};

const Post: NextPage = () => {
  return (
    <BackgroundWrapper>
      <Head headTitle="Slug" />

      <Header headerTitle="Slug" />
    </BackgroundWrapper>
  );
};

export default Post;
