import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 4rem;

  justify-content: center;
  background: ${(props) => props.theme.colors.background}
    url(/images/whiteBackground.webp) no-repeat;
  background-size: cover;

  ${(props) =>
    props.theme.title === "dark" &&
    `
      background: url(/images/darkBackground.png) no-repeat;
      background-size: cover;
  `}

  padding: 2.25rem 2.25rem 0 2.25rem;

  @media (max-width: 975px) {
    width: 100%;
  }
`;
