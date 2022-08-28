import React from 'react'

import * as S from "./styles"

import DefaultScreen from '../../../components/Login/DefaultScreen'
import { Button } from '../../../components'
import { colors } from '../../../utils/colors'

export function Home() {
    return (
        <DefaultScreen>
            <S.ButtonsDiv>
                <Button>
                    Entrar
                </Button>
                <Button background={colors.valid[0.1]}>
                    Criar Conta
                </Button>
            </S.ButtonsDiv>
        </DefaultScreen>
    )
}