import React from 'react'

import * as S from "./styles"
import { IStyledTextInput } from './types'

export const TextInput = ({ height, width, placeholder, type }: IStyledTextInput) => {
  return (
    <S.TextInput
      type={type}
      height={height}
      width={width}
      placeholder={placeholder}
    />
  )
}