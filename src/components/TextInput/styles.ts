import styled, { css } from "styled-components"
import { colors } from "../../utils/colors"

import { IStyledTextInput } from "./types"
import { motion } from "framer-motion"

export const TextInput = styled(motion.input) <IStyledTextInput>`
    outline: none;
    box-shadow: none;
    border-radius: 5px;
    border: 1px solid ${colors.primary[1.1]};
    background: transparent;
    color: ${colors.primary[1]};
    font-weight: 500;
    font-size: 1rem;
    padding: 0 8px;

    ${({ height, width }) =>
        css`
            height: ${height ?? '35px'};
            width: ${width ?? '250px'};
        `
    }
`