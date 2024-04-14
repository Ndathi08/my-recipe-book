import * as React from 'react';
import { green, orange } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: orange[600],
        },
        secondary:{
            main: green[500]
        }
    },
});

type ThemeProps = {
    children: React.ReactNode;
}

export default function Theme({ children }: ThemeProps) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

