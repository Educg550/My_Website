import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 2rem;
  width: 100%;

  @media (max-width: 650px) {
    .mobile-delete {
      display: none;
    }

    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-family: Oswald;
  font-weight: 700;

  font-size: 75px;

  @media (max-width: 650px) {
    font-size: 2rem;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;

  flex: 0.25;

  @media (max-width: 650px) {
    justify-content: center;
    align-items: center;
  }
`;

export const UtilitiesBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  gap: 1.5rem;
`;
