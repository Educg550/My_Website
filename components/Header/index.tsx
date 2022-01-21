import { useContext } from "react";
import { Container, IconBox, HeaderTitle } from "./styles";

import { GiHamburgerMenu } from "react-icons/gi";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";

import Link from "next/link";

import Switch from "react-switch";
import { ThemeContext } from "styled-components";

interface HeaderProps {
  toggleTheme(): void;
}

export const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <GiHamburgerMenu size={36} />

      <HeaderTitle>Home</HeaderTitle>

      <IconBox>
        <Link href="https://www.linkedin.com/in/eduardo-cruz-guedes-276a01206/">
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
          checkedIcon={false}
          uncheckedIcon={false}
          height={36}
          offColor={colors.text}
          onColor={colors.text}
          onHandleColor={colors.background}
        />
      </IconBox>
    </Container>
  );
};
