import React from 'react'

import * as S from "./styles"

import { motion } from "framer-motion"

import DefaultScreen from '../../../components/Login/DefaultScreen'
import { Button, TextInput } from '../../../components'
import { colors } from '../../../utils/colors'

export const SignIn = () => {
    return (
        <DefaultScreen>
            <S.ButtonsDiv>
                <TextInput placeholder='Email' type='text' />
                <TextInput placeholder='Senha' type='password' />
                <Button background={colors.valid[0]}>
                    Iniciar Sessão
                </Button>
            </S.ButtonsDiv>
        </DefaultScreen>
    )
}