import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;

  margin: 2.25rem;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;
