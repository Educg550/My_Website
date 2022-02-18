import { useContext } from "react";
import { Container, IconBox, HeaderTitle, Logo, RemainBox } from "./styles";

import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";

import { BsMoonStars, BsSun } from "react-icons/bs";

import { IoIosArrowBack } from "react-icons/io";

import Link from "next/link";

import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { StackContext } from "../../../pages/_app";

interface HeaderProps {
  headerTitle: string;
}

export const Header: React.FC<HeaderProps> = ({ headerTitle }) => {
  const { colors, title } = useContext(ThemeContext);
  const { toggleTheme } = useContext(StackContext);

  return (
    <Container>
      <Link href="/">
        <a>
          <Logo
            src={
              title === "light" ? "/images/lightLogo.png" : "/images/logo.png"
            }
            height={50}
          />
          <RemainBox>
            <IoIosArrowBack size={30} />
          </RemainBox>
        </a>
      </Link>

      <HeaderTitle>{headerTitle}</HeaderTitle>

      <IconBox>
        <Link href="https://www.linkedin.com/in/educg550/">
          <a target="_blank">
            <AiFillLinkedin size={36} color={colors.text} />
          </a>
        </Link>
        <Link href="https://www.instagram.com/educg550/">
          <a target="_blank">
            <AiOutlineInstagram size={36} color={colors.text} />
          </a>
        </Link>
        <Link href="https://github.com/Educg550">
          <a target="_blank">
            <AiOutlineGithub size={36} color={colors.text} />
          </a>
        </Link>

        <Switch
          onChange={toggleTheme}
          checked={title === "dark"}
          uncheckedIcon={
            <BsMoonStars
              color={colors.background}
              style={{
                padding: 3,
                height: "100%",
                width: "100%",
              }}
            />
          }
          checkedIcon={
            <BsSun
              size={10}
              color={colors.background}
              style={{
                padding: 3,
                height: "100%",
                width: "100%",
              }}
            />
          }
          height={36}
          offColor={colors.text}
          onColor={colors.text}
          onHandleColor={colors.background}
        />
      </IconBox>
    </Container>
  );
};
