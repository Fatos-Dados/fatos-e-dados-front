import React from 'react'

import * as S from "./styles"
import { IButtonsProps } from './types'

export const Button = ({ children, background, handleClick }: IButtonsProps) => {
    return (
        <S.Button background={background} onClick={handleClick}>
            {children}
        </S.Button>
    )
}