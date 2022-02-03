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
import Link from "next/link";

export const ProfileInfo = () => {
  return (
    <Container>
      <MainInfoBox>
        <ProfilePicture
          src="https://avatars.githubusercontent.com/u/47800334"
          className="mobile-delete"
        />
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
            <Link href="/documents/CV.pdf">
              <a>
                <Button>
                  <Text>Currículo</Text>
                </Button>
              </a>
            </Link>
            <Link href="/blog">
              <a>
                <OutlineButton>
                  <Text>Blog</Text>
                </OutlineButton>
              </a>
            </Link>
          </ButtonsContainer>
        </InfoBox>
      </MainInfoBox>
    </Container>
  );
};
