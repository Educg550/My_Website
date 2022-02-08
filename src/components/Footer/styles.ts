import styled from "styled-components";

export const GraySubtitle = styled.h3`
  font-family: Oswald;
  font-weight: 300;
  font-size: 0.875rem;

  color: ${(props) => props.theme.colors.gray};

  align-self: center;
  bottom: 1;

  @media (max-width: 650px) {
    font-size: 1rem;
  }
`;
