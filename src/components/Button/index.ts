import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  width: 7.8rem;
  height: 3.25rem;

  border-radius: 10px;
  padding: 0;
  border: none;

  &:hover {
    background-color: ${(props) => props.theme.colors.red};
    cursor: pointer;
    transition: 0.2s;
  }
`;
