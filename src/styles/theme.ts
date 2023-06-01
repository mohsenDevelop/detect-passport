import { createTheme } from '@mui/material/styles';
import { colorPalette } from '@uiKits/colors';

export const theme = createTheme({
    components: {
        MuiTab: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontSize: 14,
                    fontWeight: 400,

                },

            }
        },

        MuiCssBaseline: {
            styleOverrides: {
                svg: {
                    margin: 0,
                },
                a: {
                    textDecoration: 'none',
                },
            },
        },
    },
    typography: {
        fontFamily: 'Inter !important',
        allVariants: {
            color: colorPalette.gray900

        },
        h1: {
            fontSize: 28,
            fontWeight: 600,
            color: colorPalette.blue800
        }
    },
    palette: {
        primary: {
            main: colorPalette.purple
        }
    },
});
