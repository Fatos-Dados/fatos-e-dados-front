import React, { ReactNode } from 'react'
import withLayout from '../../../hocs/Layout/layout'
import * as S from './styles'

import logo from "../../../assets/img/logo.svg"
import { LoginLayoutProps } from './types'

const DefaultScreen = ({ children }: LoginLayoutProps) => {

    return (
        <S.Container>
            <img src={logo} alt="Logo" />
            <S.ChildrenContent>
                {children}
            </S.ChildrenContent>
            <span>@Fatos&amp;Dados</span>
        </S.Container>
    )
}

export default withLayout(DefaultScreen)