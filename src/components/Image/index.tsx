import { Container, Img } from "./styles";
import { GraySubtitle } from "../GraySubtitle";

interface ImageProps {
  src: string;
  subtitle?: string;
}

export const Image: React.FC<ImageProps> = ({ src, subtitle }) => {
  return (
    <Container>
      <Img src={src} />
      <GraySubtitle>{subtitle}</GraySubtitle>
    </Container>
  );
};
