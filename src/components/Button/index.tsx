import React from 'react'

import * as S from "./styles"
import { IButtonsProps } from './types'

export const Button = ({ children, background }: IButtonsProps) => {
    return (
        <S.Button background={background}>
            {children}
        </S.Button>
    )
}