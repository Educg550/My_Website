import { Container, Img } from "./styles";
import { GraySubtitle } from "../GraySubtitle";

interface ImageProps {
  src: string;
  alt?: string;
}

export const Image: React.FC<ImageProps> = ({ src, alt }) => {
  return (
    <Container>
      <Img src={src} alt={alt} />
      <GraySubtitle>{alt}</GraySubtitle>
    </Container>
  );
};
