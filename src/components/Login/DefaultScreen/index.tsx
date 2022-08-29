import React, { ReactNode } from 'react'
import withLayout from '../../../hocs/Layout/layout'
import * as S from './styles'

import logo from "../../../assets/img/logo.svg"
import { LoginLayoutProps } from './types'

const modal = {
    initial: {
        y: "-100vh",
    },
    animate: {
        y: 0,
    },
    exit: {
        y: "100vh"
    }
}

const DefaultScreen = ({ children }: LoginLayoutProps) => {
    return (
        <S.Container
            variants={modal}
            initial='initial'
            animate='animate'
            exit='exit'
        >
            <img src={logo} alt="Logo" />
            <S.ChildrenContent>
                {children}
            </S.ChildrenContent>
            <span>@Fatos&amp;Dados</span>
            <div className='clip-path' />
        </S.Container>
    )
}

export default withLayout(DefaultScreen)