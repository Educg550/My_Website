import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 0.1rem;
`;

export const Img = styled.img`
  width: 18vw;
  height: auto;

  max-width: 17rem;

  @media (max-width: 650px) {
    width: 5rem;
    height: 5rem;
  }
`;
