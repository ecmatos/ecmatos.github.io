import { createGlobalStyle } from "styled-components";
import px2vw from "../utils/px2vw";
import { colors } from "../data/colors";

export const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root{
        font-size: ${px2vw(24)};
        font-family: 'Roboto', 'Arial';
        background-color: ${colors.bgMain};

        @media (min-width: 768px) {
            font-size: ${px2vw(18)};
        }

        @media (min-width: 1024px) {
            font-size: ${px2vw(16)};
        }
    }
`;

export default Global;
