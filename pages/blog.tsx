import { NextPage } from "next";
import Head from "../src/infra/components/Head";
import { BackgroundWrapper } from "../src/components/BackgroundWrapper";
import { BlogCard } from "../src/components/BlogCard";
import { Header } from "../src/components/Header";

import Footer from "../src/components/Footer";

const Blog: NextPage = () => {
  return (
    <BackgroundWrapper>
      <Head title="Blog" />

      <Header headerTitle="Blog" />

      <BlogCard />

      <Footer />
    </BackgroundWrapper>
  );
};

export default Blog;
