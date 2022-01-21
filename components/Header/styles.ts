import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  flex: 1;
  max-height: 6.25rem;

  justify-content: space-between;
  align-items: center;
`;

export const IconBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const HeaderTitle = styled.h2`
  font-family: Oswald;
  font-weight: 300;
  font-size: 1.75rem;

  line-height: 0;

  color: ${(props) => props.theme.colors.gray};
`;
