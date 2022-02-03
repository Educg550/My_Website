import { Anchor } from "./styles";
import Link from "next/link";

import { slide as Menu } from "react-burger-menu";
import { useState } from "react";
import { Title } from "../Title";

export const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Menu noOverlay width={450} isOpen={isMenuOpen}>
      <Title>Páginas</Title>
      <Link href={"/"}>
        <Anchor
          onClick={() => {
            setIsMenuOpen(false);
          }}
        >
          Home
        </Anchor>
      </Link>
      <Link href={"/blog"}>
        <Anchor
          onClick={() => {
            setIsMenuOpen(false);
          }}
        >
          Meus projetos
        </Anchor>
      </Link>
    </Menu>
  );
};
