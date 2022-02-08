import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  padding: 2.5rem 3.5rem;
  gap: 1rem;
  border-radius: 1rem;

  background: ${(props) => props.theme.colors.secondaryBackground};

  @media (max-width: 650px) {
    width: 100%;
    border-radius: 0;

    padding: 2.5rem 2rem;
  }
`;

export const TitleBox = styled.div`
  display: inline-block;
  margin-bottom: 1.75rem;
  width: fit-content;

  padding: 1rem;

  background-color: ${(props) => props.theme.colors.text};
  border-radius: 15px;
`;
