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
        action: {
            disabledBackground: '#6c759624',
            selected: '#00000014',
        },

        divider: '#2121211C',

        skeleton: '#e0e0e0',

        background: {
            default:'#fff',
            secondary: '#fafafa',
            paper: '#fff',
        },
    },
    typography: {
        fontFamily: [
            'IRANSans',
            // 'Poppins',
            // 'sans-serif',
        ].join(','),

        h1: {
            fontSize: '26px',
        },
        h2: {
            fontSize: '23px',
        },
        h3: {
            fontSize: '21px',
        },
        h4: {
            fontSize: '18px',
        },
        h5: {
            fontSize: '15px',
        },
        h6: {
            fontSize: '14px',
        },
        body1: {
            fontSize: '13px',
        },
        body2: {
            fontSize: '11px',
        },
        caption: {
            fontSize: '9px',
        },
        overline: {
            fontSize: '8px',
        },
    },

    // shadows: Array(25).fill('none')
    shadows: [
        '0px 0px 4px rgba(0,0,0,.14)',
        '0px 12px 32px rgba(0,0,0,.04)'
    ],
})