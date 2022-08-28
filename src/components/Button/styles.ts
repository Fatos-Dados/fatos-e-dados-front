import styled, { css } from "styled-components";
import { colors } from "../../utils/colors";

import { IStyledButton } from "./types";

export const Button = styled.button<IStyledButton>`
    text-transform: uppercase;
    border-radius: 5px;
    border: 1px solid ${colors.primary[1.1]};
    color: ${colors.primary[1]};
    font-weight: 500;
    font-size: 0.8rem;
    transition: 0.5s;

    ${({ background, height, width }) =>
        css`
            background: ${background ?? 'transparent'};
            height: ${height ?? '50px'};
            width: ${width ?? '250px'};
        `
    }

    &:hover {
        filter: brightness(0.9);
    }
`