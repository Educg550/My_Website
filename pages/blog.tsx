import { NextPage } from "next";
import Head from "../src/infra/components/Head";
import { BackgroundWrapper } from "../src/components/BackgroundWrapper";
import { BlogCard } from "../src/components/BlogCard";
import { Header } from "../src/components/Header";

import Footer from "../src/components/Footer";

import { PostProps } from "./posts/[slug]";

interface BlogProps {
  posts: PostProps[];
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://my-json-server.typicode.com/Educg550/My_Website/posts"
  );
  const data = await res.json();

  return {
    props: { posts: data },
  };
};

const Blog: NextPage<BlogProps> = ({ posts }) => {
  return (
    <BackgroundWrapper>
      <Head headTitle="Blog" />

      <Header headerTitle="Blog" />

      <div>
        {posts.map((data) => {
          // a "key" é o próprio slug
          return (
            <BlogCard
              slug={data.slug}
              title={data.title}
              subtitle={data.subtitle}
              thumbnail={data.thumbnail}
            />
          );
        })}
      </div>

      <Footer />
    </BackgroundWrapper>
  );
};

export default Blog;
