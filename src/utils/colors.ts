import { darken, transparentize } from "polished"

export const colors = {
    primary: {
        0: '#1f1e1e',
        1: '#c4c2c2',
        1.1: transparentize(0.6, '#c4c2c2'),
    },
    danger: {
        0: '#a10000',
        0.1: transparentize(0.9, '#a10000'),
        0.2: darken(0.9, '#a10000'),
    },
    valid: {
        0: '#024d06',
        0.1: transparentize(0.2, '#024d06'),
        0.2: darken(0.9, '#024d06'),
    }
}