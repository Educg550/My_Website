import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${(props) => props.theme.colors.background};
        font-size: 16px;
        color: ${(props) => props.theme.colors.text};
        font-family: 'Sora', sans-serif;

        @media (max-width: 650px) {
            font-size: 12px;
        }
    }
`;
