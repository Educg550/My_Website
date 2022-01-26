import { ReactNode, useContext } from "react";
import { ThemeContext } from "styled-components";
import { Title } from "../Title";
import { Container, TitleBox } from "./styles";

interface ContentHolderProps {
  title: string;
  children?: ReactNode;
}

export const ContentHolder: React.FC<ContentHolderProps> = ({
  title,
  children,
}) => {
  const { colors } = useContext(ThemeContext);

  return (
    <Container>
      <TitleBox>
        <Title style={{ color: colors.light }}>{title}</Title>
      </TitleBox>
      {children}
    </Container>
  );
};
