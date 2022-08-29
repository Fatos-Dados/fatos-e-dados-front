import React from 'react'

import * as S from "./styles"

import { motion } from "framer-motion"

import DefaultScreen from '../../../components/Login/DefaultScreen'
import { Button, TextInput } from '../../../components'
import { colors } from '../../../utils/colors'

export const SignIn = () => {
    return (
        <DefaultScreen>
            <S.InputsDiv>
                <TextInput placeholder='Email' type='text' />
                <TextInput placeholder='Senha' type='password' />
                {/* <div>Lembrar minhas informações <input type="checkbox" /></div>
                <p>Esqueci a senha!</p> */}
                <Button background={colors.valid[0]}>
                    Iniciar Sessão
                </Button>
            </S.InputsDiv>
        </DefaultScreen>
    )
}