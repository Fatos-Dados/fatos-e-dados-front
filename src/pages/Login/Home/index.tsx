import React from 'react'

import * as S from "./styles"

import { useNavigate } from 'react-router';

import DefaultScreen from '../../../components/Login/DefaultScreen'
import { Button } from '../../../components'
import { colors } from '../../../utils/colors'

export const Home = () => {
    const navigate = useNavigate()

    function loginNavigate() {
        navigate('/login')
    }

    return (
        <DefaultScreen>
            <S.ButtonsDiv>
                <Button handleClick={loginNavigate}>
                    Entrar
                </Button>
                <Button background={colors.valid[0.1]}>
                    Criar Conta
                </Button>
            </S.ButtonsDiv>
        </DefaultScreen>
    )
}