import { Title } from "../Title";
import { GraySubtitle } from "../GraySubtitle";
import Lottie from "react-lottie";
import programming from "../../public/lotties/programming.json";
import {
  DiReact,
  DiHtml5,
  DiCss3,
  DiPhp,
  DiNodejsSmall,
  DiMysql,
  DiJava,
} from "react-icons/di";
import { SiTypescript, SiJavascript } from "react-icons/si";

import {
  Container,
  IconsContainer,
  InfoBox,
  ProfilePicture,
  ProgrammingIcons,
} from "./styles";

export const ProfileInfo = () => {
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
      <ProfilePicture src="https://avatars.githubusercontent.com/u/47800334" />

      <InfoBox>
        <Title>Olá, eu sou o Eduardo! 👋</Title>
        <GraySubtitle>
          Um dev focado em Front-end que busca ultrapassar suas fronteiras 💪
        </GraySubtitle>
        <IconsContainer>
          <ProgrammingIcons>
            <DiReact size={36} />
            <DiHtml5 size={36} />
            <DiCss3 size={36} />
            <SiTypescript size={36} />
            <SiJavascript size={36} />
          </ProgrammingIcons>
          <ProgrammingIcons>
            <DiPhp size={36} />
            <DiNodejsSmall size={36} />
            <DiMysql size={36} />
            <DiJava size={36} />
          </ProgrammingIcons>
        </IconsContainer>

        <Lottie options={lottieOptions} height={400} width={400} />
      </InfoBox>
    </Container>
  );
};
