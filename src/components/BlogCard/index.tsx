import React from "react";

import { Container, TextBox, Thumbnail } from "./styles";
import { Title } from "../Title";
import { Text } from "../Text";

import Link from "next/link";
import { useRouter } from "next/router";

interface BlogCardProps {
  slug: string;
  title: string;
  subtitle: string;

  thumbnail: string; // Thumb src
}

export const BlogCard: React.FC<BlogCardProps> = ({
  slug,
  title,
  subtitle,
  thumbnail,
}) => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <div key={slug}>
      <Link href={`/posts/${slug}`}>
        <a>
          <Container>
            <Thumbnail src={thumbnail} />

            <TextBox>
              <Title>{title}</Title>
              <Text>{subtitle}</Text>
            </TextBox>
          </Container>
        </a>
      </Link>
    </div>
  );
};
