import React from "react";

import { Container, TextBox, Thumbnail } from "./styles";
import { Title } from "../Title";
import { Text } from "../Text";
import Link from "next/link";
import { useRouter } from "next/router";

export const BlogCard: React.FC = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <Link href={`/blog/${pid}`}>
      <a>
        <Container>
          <Thumbnail src="/images/posts/1-thumbnail.png" />

          <TextBox>
            <Title>Risum - Projeto de TCC 2021</Title>
            <Text>
              Uma rede social desenvolvida para dispositivos móveis, com ênfase
              na criação e compartilhamento de memes. O projeto já está
              disponível e à público. Foram utilizadas principalmente as
              tecnologias React Native, TypeScript e Google Firebase.
            </Text>
          </TextBox>
        </Container>
      </a>
    </Link>
  );
};
