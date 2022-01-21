import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 5rem;
  gap: 4rem;

  max-width: 46rem;
  align-self: center;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;

  &:nth-child(2) {
    margin-bottom: 10rem;
  }

  gap: 2rem;

  justify-content: center;
`;

export const ProgrammingIcons = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 0.5rem;
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
`;

export const ProfilePicture = styled.img`
  width: 25rem;
  height: 25rem;
  border-radius: 12.5rem;

  border: 3px solid black;
`;
