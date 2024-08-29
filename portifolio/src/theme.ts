import { createTheme, responsiveFontSizes } from "@mui/material";



let theme = createTheme({
    palette: {
        primary: {
            main: '#232323',
        },
        secondary: {
            main: '#4f8e3e',
        },
    },
    typography: {
        fontFamily: [
            "Helvetica Neue",
            // "-apple-system",
            // "BlinkMacSystemFont",
            // "Segoe UI",
            // "Segoe UI Emoji",
            // "Segoe UI Symbol",
            // "Roboto",
            // "Oxygen",
            // "Ubuntu",
            // "Cantarell",
            // "Fira Sans",
            // "Droid Sans",
            // "Arial",
            // "sans-serif",
            // "Apple Color Emoji",
        ].join(','),
    }
});

theme = responsiveFontSizes(theme);

export default theme