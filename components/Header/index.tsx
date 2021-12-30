import { Container, IconBox, HeaderTitle } from "./styles";

import { GiHamburgerMenu } from "react-icons/gi";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";

import Link from "next/link";

export const Header = () => {
  return (
    <Container>
      <GiHamburgerMenu size={36} />

      <HeaderTitle>Home</HeaderTitle>

      <IconBox>
        <Link href="https://www.linkedin.com/in/eduardo-cruz-guedes-276a01206/">
          <a>
            <AiFillLinkedin size={36} />
          </a>
        </Link>
        <Link href="https://www.instagram.com/educg550/">
          <a>
            <AiOutlineInstagram size={36} />
          </a>
        </Link>
        <Link href="https://github.com/Educg550">
          <a target="_blank">
            <AiOutlineGithub size={36} />
          </a>
        </Link>
      </IconBox>
    </Container>
  );
};
