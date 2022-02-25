import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;

  justify-content: center;

  width: 100%;
  max-width: 80rem;
  border-radius: 3rem;

  gap: 1rem;

  background: ${(props) => props.theme.colors.secondaryBackground};

  @media (max-width: 950px) {
    flex-direction: column;

    max-width: 60vw;
  }
`;

export const Thumbnail = styled.img`
  height: 15.5rem;
  border-radius: 3rem 0 0 3rem;

  @media (max-width: 950px) {
    width: 100%;
    height: auto;
    border-radius: 3rem 3rem 0 0;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0;

  gap: 1.25rem;

  @media (max-width: 950px) {
    padding: 2rem;
  }
`;
