import {createTheme} from "@mui/material/styles";

export const theme = createTheme({
    // direction: 'rtl',
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    background: '#fff',
                    color: '#212124',
                    'a' : {
                        textDecoration: "none",
                        color: "inherit",
                    }
                }
            }
        },
    },

    // breakpoints: {
    //     values: {
    //         mobile: 0,
    //         tablet: 640,
    //         laptop: 1024,
    //         desktop: 1200,
    //     },
    // },

    palette: {
        primary: {
            main: '#4285F2',
            light: '#4285f24d',
            lighter: '#4285f21a',
        },
        secondary: {
            main: '#8b9098',
            light: '#ebedf1',
            lighter: 'rgba(235,237,241,.3)'
        },
        error: {
            main: '#eb4137',
            light: '#f5a09bb2',
            lighter: '#f5a09b1a',
        },
        warning: {
            main: '#fbbd06',
            light: '#fdde82b2',
            lighter: '#fdde821a',
        },
        info: {
            main: '#4a7f9c',
            light: '#60abd547',
            lighter: '#60abd51a',
        },
        success: {
            main: '#30be81',
            light: '#a0d6aeb2',
            lighter: '#a0d6ae1a',

        },
        text: {
            primary: '#212124',
            secondary: '#00000099',
            mute: '#bdbdbd'

        },
        background: {
            default:'#fff',
            secondary: '#fafafa',
            paper: '#fff',
        },
    },
    typography: {
        fontFamily: 'Poppins',
        h1: {
            fontSize: '27px',
        },
        h2: {
            fontSize: '24px',
        },
        h3: {
            fontSize: '22px',
        },
        h4: {
            fontSize: '20px',
        },
        h5: {
            fontSize: '18px',
        },
        h6: {
            fontSize: '16px',
        },
        body1: {
            fontSize: '14px',
        },
        body2: {
            fontSize: '12px',
        },
        caption: {
            fontSize: '10px',
        },
        overline: {
            fontSize: '9px',
        },
    },

    // shadows: Array(25).fill('none')
    shadows: [
        '0px 0px 4px rgba(0,0,0,.14)',
        '0px 12px 32px rgba(0,0,0,.04)'
    ],
})