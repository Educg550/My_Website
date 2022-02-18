import { NextPage } from "next";
import { GetStaticProps } from "next";

import Head from "../src/infra/components/Head";
import { BackgroundWrapper } from "../src/components/BackgroundWrapper";
import { BlogCard } from "../src/components/BlogCard";
import { Header } from "../src/components/Header";

import Footer from "../src/components/Footer";

import { PostProps } from "./posts/[id]";
import styled from "styled-components";

interface BlogProps {
  posts: PostProps[];
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    "https://my-json-server.typicode.com/Educg550/My_Website/posts"
  );
  const data = await res.json();

  return {
    props: { posts: data },
  };
};

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  gap: 2.5rem;

  @media (max-width: 950px) {
    justify-content: center;
    align-items: center;
  }
`;

const Blog: NextPage<BlogProps> = ({ posts }) => {
  return (
    <BackgroundWrapper>
      <Header headerTitle="Blog" />

      <Head headTitle="Blog" />

      <CardsContainer>
        {posts.map((data, key) => {
          // a "key" é o próprio slug
          return (
            <BlogCard
              key={key}
              id={data.id.toString()}
              slug={data.slug}
              title={data.title}
              cardText={data.cardText}
              thumbnail={data.thumbnail}
            />
          );
        })}
      </CardsContainer>

      <Footer />
    </BackgroundWrapper>
  );
};

export default Blog;
