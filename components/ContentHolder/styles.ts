import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  padding: 2.5rem 3.5rem;
  gap: 1rem;
  border-radius: 15px 15px 0 0;

  background: ${(props) => props.theme.colors.secondaryBlue};
`;

export const TitleBox = styled.div`
  display: inline-block;
  margin-bottom: 1.75rem;
  width: fit-content;

  padding: 1rem;

  background-color: ${(props) => props.theme.colors.dark};
  border-radius: 15px;
`;
