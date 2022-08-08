import { Container, TitleBox, UtilitiesBox, LottieContainer } from "./styles";
import { Title } from "./styles";
import { Image } from "../Image/index";

import programming from "../../../public/lotties/programming.json";

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
    <Container id="utilities">
      <TitleBox>
        <Title>Ferramentas que utilizo:</Title>
        <LottieContainer>
          <Lottie
            options={lottieOptions}
            height={400}
            width={400}
            isClickToPauseDisabled={true}
          />
        </LottieContainer>
      </TitleBox>

      <UtilitiesBox>
        <Image src="images/figma.png" alt="Figma" />
        <Image src="images/vsCode.png" alt="Visual Studio Code" />
        <Image src="images/manjaro.png" alt="KDE Neon" />
        <Image src="images/github.png" alt="GitHub" />
        <Image src="images/canva.webp" alt="Canva" />
      </UtilitiesBox>
    </Container>
  );
};
