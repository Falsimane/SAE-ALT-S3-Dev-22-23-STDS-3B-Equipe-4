import {Theme} from "@mui/material";

export interface ErrorFormat {
    errorLevel: 0 | 1 | 2,
    message: string
    pdf: string
}

export interface ErrorUtils {
    temp1: ErrorFormat;
    temp2: ErrorFormat;
    puissance: ErrorFormat;
    co2: ErrorFormat;
    niveau: ErrorFormat;
}

export const getErrorColor = (errorLevel: 0 | 1 | 2, theme: Theme) => {
    switch (errorLevel) {
        case 0:
            return theme.palette.success.light;
        case 1:
            return theme.palette.warning.light;
        case 2:
            return theme.palette.error.main;
    }
}