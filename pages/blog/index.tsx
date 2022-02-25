import { NextPage } from "next";
import { GetStaticProps } from "next";

import Head from "../../src/infra/components/Head";
import { BackgroundWrapper } from "../../src/components/BackgroundWrapper";
import { BlogCard } from "../../src/components/BlogCard";
import { Header } from "../../src/components/Header";

import Footer from "../../src/components/Footer";

import { PostProps } from "./[id]";
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

  justify-content: center;
  align-items: center;

  width: 100%;

  gap: 2.5rem;
`;

const Blog: NextPage<BlogProps> = ({ posts }) => {
  return (
    <BackgroundWrapper>
      <Header headerTitle="Blog" />

      <Head headTitle="Blog" />

      <CardsContainer>
        {posts
          .slice(0)
          .reverse()
          .map((data, key) => {
            // a "key" é o próprio slug
            return (
              <BlogCard
                key={key}
                id={data.id.toString()}
                slug={data.slug}
                title={data.title}
                cardText={data.cardText}
              />
            );
          })}
      </CardsContainer>

      <Footer />
    </BackgroundWrapper>
  );
};

export default Blog;
