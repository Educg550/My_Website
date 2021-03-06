import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 2rem;

  width: 100%;
`;

export const MainInfoBox = styled.div`
  display: flex;
  align-items: center;

  gap: 1.5rem;

  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.5rem;

  justify-content: center;

  @media (max-width: 650px) {
    align-items: center;
    max-width: 650px;
  }
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

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const ProfilePicture = styled.img`
  width: 25rem;
  border-radius: 12.5rem;

  border: 3.5px solid
    ${(props) =>
      props.theme.title === "dark" ? props.theme.colors.primary : "black"};

  @media (max-width: 650px) {
    width: 17.5rem;
  }
`;
