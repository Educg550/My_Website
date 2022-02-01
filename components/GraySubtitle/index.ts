import styled from "styled-components";

export const GraySubtitle = styled.h3`
  font-family: Oswald;
  font-weight: 300;
  font-size: 1.125rem;

  color: ${(props) => props.theme.colors.gray};

  @media (max-width: 650px) {
    font-size: 1rem;
  }
`;
