import React, { ReactNode } from 'react'
import withLayout from '../../../hocs/Layout/layout'
import * as S from './styles'

import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router';

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
    const navigate = useNavigate()
    const isHome = window.location.pathname === '/'

    const returnLogin = () => {
        navigate('/')
    }

    return (
        <S.Container
            variants={modal}
            initial='initial'
            animate='animate'
            exit='exit'
        >
            {!isHome && <IoIosArrowBack onClick={returnLogin} />}
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