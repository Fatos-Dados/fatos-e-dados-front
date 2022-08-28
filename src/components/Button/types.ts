import { ReactNode } from "react";

export interface IStyledButton {
    background?: string;
    height?: string;
    width?: string;
}

export interface IButtonsProps extends IStyledButton {
    children: ReactNode;
}