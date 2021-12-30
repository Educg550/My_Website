import { Title } from "../Title";
import { GraySubTitle } from "../GraySubTitle";
import styles from "./styles.module.scss";
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
    <div className={styles.container}>
      <img
        src="https://avatars.githubusercontent.com/u/47800334"
        className={styles.profilePicture}
      />

      <div className="infoBox">
        <Title>Olá, eu sou o Eduardo!</Title>
        <GraySubTitle>
          Um dev focado em Front-end que busca ultrapassar suas fronteiras 💪
        </GraySubTitle>
        <div className="programmingIcons">
          <DiReact size={36} />
          <DiHtml5 size={36} />
          <DiCss3 size={36} />
          <SiTypescript size={36} /> <SiJavascript size={36} />
          <DiPhp size={36} />
          <DiNodejsSmall size={36} />
          <DiMysql size={36} />
          <DiJava size={36} />
        </div>
        <Lottie options={lottieOptions} height={400} width={400} />
      </div>
    </div>
  );
};
