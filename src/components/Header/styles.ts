import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  flex: 1;
  max-height: 6.25rem;

  justify-content: space-around;
  align-items: center;
`;

export const IconBox = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 650px) {
    max-height: 30px;
  }
`;

export const HeaderTitle = styled.h2`
  font-family: Oswald;
  font-weight: 300;
  font-size: 1.75rem;

  line-height: 0;

  color: ${(props) => props.theme.colors.gray};
`;

export const Logo = styled.img`
  @media (max-width: 650px) {
    display: none;
  }
`;

export const RemainBox = styled.div`
  @media (min-width: 650px) {
    display: none;
  }
`;
