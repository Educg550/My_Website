import styled from "styled-components";

export const BackgroundWrapper = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;

  gap: 4rem;

  background: ${(props) => props.theme.colors.background}
    url(/images/whiteBackground.webp) no-repeat;
  background-size: cover;

  ${(props) =>
    props.theme.title === "dark" &&
    `
      background: url(/images/darkBackground.png) no-repeat;
      background-size: cover;
  `}

  padding: 2.25rem;

  @media (max-width: 950px) {
    gap: 2.5rem;
  }

  @media (max-width: 650px) {
    gap: 2.5rem;
    padding: 2.25rem 0;
  }
`;
