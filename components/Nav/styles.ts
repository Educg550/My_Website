import styled from "styled-components";

export const Anchor = styled.a`
  display: flex;

  font-family: Oswald;
  font-size: 1rem;

  background: none;
  border: 0;
  cursor: pointer;
  color: ${(props) => props.theme.colors.text};
`;
