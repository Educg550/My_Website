import styled from "styled-components";

export const OutlineButton = styled.button`
  background: none;
  width: 7.8rem;
  height: 3.25rem;

  border-radius: 10px;
  padding: 0;
  border: 2px solid ${(props) => props.theme.colors.text};

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
    cursor: pointer;
    transition: 0.2s;
  }
`;
