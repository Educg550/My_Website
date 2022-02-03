import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;

  width: 100%;
  border-radius: 3rem;
  padding-right: 2rem;
  gap: 1rem;

  background: ${(props) => props.theme.colors.secondaryBackground};
`;

export const Thumbnail = styled.img`
  height: 15.5rem;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0;

  gap: 1.25rem;
`;
