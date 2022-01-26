import { Title } from "../Title";
import { GraySubtitle } from "../GraySubtitle";
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
  MainInfoBox,
  InfoBox,
  ProfilePicture,
  ProgrammingIcons,
  ButtonsContainer,
} from "./styles";
import { Button } from "../Button";
import { OutlineButton } from "../OutlineButton";
import { Text } from "../Text";

import bottomArrow from "../../public/lotties/bottom-arrow.json";
import Lottie from "react-lottie";

export const ProfileInfo = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: bottomArrow,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container>
      <MainInfoBox>
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

          <ButtonsContainer>
            <Button>
              <Text>Currículo</Text>
            </Button>
            <OutlineButton>
              <Text>Blog</Text>
            </OutlineButton>
          </ButtonsContainer>
        </InfoBox>
      </MainInfoBox>

      <Lottie options={lottieOptions} height={125} width={125} />
    </Container>
  );
};
