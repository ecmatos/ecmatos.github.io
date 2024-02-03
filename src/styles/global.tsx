import { createGlobalStyle } from "styled-components";
import { colors } from "../data/colors";

export const Global = createGlobalStyle`
    html,
    body,
    .full-height {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;

        background-color: ${colors.bgMain};

        -webkit-text-size-adjust: none !important;
    }

    body {
        font-family: 'Roboto', 'Arial';
    }
`;

export default Global;
