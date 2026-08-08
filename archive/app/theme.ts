'use client';
import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#d02b2b',
        },
        secondary: {
            main: '#a21e1e',
        },
    },
    typography: {
        fontFamily: 'var(--font-poppins)',
    },
});

export default theme;
