import React from "react";

import { Container, TextBox, Thumbnail } from "./styles";
import { Title } from "../Title";
import { Text } from "../Text";

import Link from "next/link";
import { GraySubtitle } from "../GraySubtitle";

interface BlogCardProps {
  id: string;
  slug: string;
  title: string;
  cardText: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  id,
  slug,
  title,
  cardText,
}) => {
  return (
    <Link href={`/blog/${id}`}>
      <a>
        <Container>
          <Thumbnail
            src={`images/posts/${id.toString()}-thumbnail.png`}
            alt="post-thumbnail"
          />

          <TextBox>
            <div>
              <Title>{title.substring(title.indexOf("-") - 1, 0)}</Title>
              <GraySubtitle>
                {title.substring(title.indexOf("-") + 2, title.length)}
              </GraySubtitle>
            </div>

            <Text>{cardText}</Text>
          </TextBox>
        </Container>
      </a>
    </Link>
  );
};
