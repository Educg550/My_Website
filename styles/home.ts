import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  background-color: ${(props) => props.theme.colors.background};

  ${(props) =>
    props.theme.title === "dark" &&
    `
      background: url(/images/mainBackground.png) no-repeat;
  `}

  padding: 2.25rem 2.25rem 0 2.25rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
