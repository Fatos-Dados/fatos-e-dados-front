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
                <motion.div
                    style={{
                        width: 200,
                        height: 200,
                        borderRadius: 30,
                        background: 'black',
                        position: 'relative',
                    }}
                >

                </motion.div>
            </S.ButtonsDiv>
        </DefaultScreen>
    )
}