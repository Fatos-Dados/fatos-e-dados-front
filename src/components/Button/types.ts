import { ReactNode } from "react";

export interface IStyledButton {
    background?: string;
    height?: string;
    width?: string;
    handleClick?: () => void;
}

export interface IButtonsProps extends IStyledButton {
    children: ReactNode;
}