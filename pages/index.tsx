import type { NextPage } from "next";

import Head from "../src/infra/components/Head";
import { Header } from "../src/components/Header";
import { ProfileInfo } from "../src/components/ProfileInfo";
import { UtilitiesInfo } from "../src/components/UtilitiesInfo";
import { ContentHolder } from "../src/components/ContentHolder";

import { Text } from "../src/components/Text";

import bottomArrow from "../public/lotties/bottom-arrow.json";
import Lottie from "react-lottie";
import { BackgroundWrapper } from "../src/components/BackgroundWrapper";

import Footer from "../src/components/Footer";

const Home: NextPage = () => {
  const textFormat = { textIndent: 25 };

  const bottomArrowOptions = {
    loop: true,
    autoplay: true,
    animationData: bottomArrow,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <BackgroundWrapper>
      <Head headTitle="Home">
        <meta
          name="description"
          content="@Educg550 | Desenvolvedor Front-end Web e Mobile aberto à novas experiências e focado na criação de designs responsivos e elegantes para o seu projeto."
        />
        <meta name="robots" content="index, nofollow" />
        <meta
          name="google-site-verification"
          content="bnFiq7Ofpl1Y8vPNcoh99VpBJKftWnARrEdI_fPwNhA"
        />
        <link rel="canonical" href="https://doge-dev.vercel.app/" />
      </Head>

      <Header headerTitle="Home" />

      <ProfileInfo />
      <button
        style={{
          background: "none",
          border: "none",
          maxWidth: 125,
          alignSelf: "center",
        }}
        onClick={() =>
          document
            .querySelector("#utilities")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <Lottie
          options={bottomArrowOptions}
          height={125}
          width={125}
          isClickToPauseDisabled={true}
        />
      </button>
      <UtilitiesInfo />

      <ContentHolder title="✍️ Sobre mim">
        <Text style={textFormat}>
          Olá! Meu nome é Eduardo Cruz Guedes, e estou atualmente cursando
          Bacharelado em Ciência da Computação. Possuo formação completa no
          curso técnico de Desenvolvimento de Sistemas, na ETEC Prof. Camargo
          Aranha, colocado em 1º lugar na classificação geral do meu curso.
        </Text>

        <Text style={textFormat}>
          Tive a ideia de montar essa página como forma de desafiar minhas
          habilidades com design e desenvolvimento na prática, além de obter a
          possibilidade de compartilhar meus projetos em andamento, conquistas e
          curiosidades pessoais no meu blog 🤠.
        </Text>

        <Text style={textFormat}>
          Tive e tenho contato com tecnologias de Front-end, focadas em
          Desenvolvimento Web, aplicativos para Desktop e Mobile, sistemas, além
          de integração e segurança da informação e testes de qualidade de
          software. Minhas principais linguagens de programação e
          tecnologias/frameworks até o momento são: TypeScript, JavaScript,
          ReactJS, React Native, Java, PHP e SQL (Pacote MySQL Workbench).
          Também possuo experiência com linguagens de marcação e estilização,
          como: HTML5, Markdown e CSS3. Obtive paixão pela tecnologia e pelo
          desenvolvimento no ensino médio conduzido juntamente ao técnico. Desde
          então, venho aprimorando minhas habilidades de forma autônoma, sendo
          que grande parte dos meus conhecimentos foram adquiridos através de
          cursos e realização de projetos extracurriculares.
        </Text>

        <Text style={textFormat}>
          Tenho familiaridade com os sistemas operacionais Windows e Linux, além
          de conhecimento avançado no pacote Office da Microsoft, Google Docs e
          conhecimento intermediário no pacote LibreOffice. Possuo conhecimento
          fluente da língua espanhola, posso escrever, falar e traduzir, pois
          nasci na Colômbia. Sou brasileiro nato nascido no exterior, e fui
          criado no Brasil desde os meus 7 anos, portanto, sou completamente
          fluente em português. Sou também capaz de compreender inglês em nível
          avançado.
        </Text>
      </ContentHolder>
      <Footer />
    </BackgroundWrapper>
  );
};

export default Home;
