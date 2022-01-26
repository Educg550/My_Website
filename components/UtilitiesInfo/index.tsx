import { Container, TitleBox, UtilitiesBox } from "./styles";
import { Title } from "../Title";
import { Image } from "../Image/index";

import programming from "../../public/lotties/programming.json";

import Lottie from "react-lottie";

export const UtilitiesInfo: React.FC = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: programming,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container>
      <TitleBox>
        <Title style={{ fontSize: 75, fontWeight: 700 }}>
          Ferramentas que utilizo:
        </Title>
        <Lottie options={lottieOptions} height={400} width={400} />
      </TitleBox>

      <UtilitiesBox>
        <Image src="images/figma.png" subtitle="Figma" />
        <Image src="images/vsCode.png" subtitle="Visual Studio Code" />
        <Image
          src="images/manjaro.png"
          subtitle="Manjaro (KDE Plasma Interface)"
        />
        <Image src="images/github.png" subtitle="GitHub" />
        <Image src="images/canva.webp" subtitle="Canva" />
      </UtilitiesBox>
    </Container>
  );
};
