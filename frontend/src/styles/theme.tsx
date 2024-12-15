import { createTheme, responsiveFontSizes } from "@mui/material";

const fontSizes = {
    h1: "60px",
    h2: "48px",
    h3: "40px",
    h4: "30px",
    body: "18px",
    subtitle: "14px",
};
const fontWeights = {
    thin: 100,
    extralight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
};

let theme = createTheme({
    fontWeights: {
        thin: 100,
        extralight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
    },

    palette: {
        primary: {
            main: "#E11B45",
        },
        secondary: {
            main: "#7C2324",
        },
        accent: {
            main: "#534E9C",
        },
        textBlack: {
            main: "#1E1E1E",
        },
        textWhite: {
            main: "#FEFAEF",
        },
        backgroundWhite: {
            main: "#FFFEFC",
        },
    },
    typography: {
        fontFamily: "Lexend Deca",

        h1: {
            fontSize: fontSizes.h1,
            fontWeight: fontWeights.regular,
        },
        h2: {
            fontSize: fontSizes.h2,
        },
        h3: {
            fontSize: fontSizes.h3,
        },
        h4: {
            fontSize: fontSizes.h4,
        },
        body1: {
            fontSize: fontSizes.body,
        },
        subtitle1: {
            fontSize: fontSizes.subtitle,
        },
    },
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: "navbtn" },
                    style: {
                        textTransform: "none",
                        fontSize: 16,
                        borderRadius: "50px",
                        ":hover": {
                            color: "#FEFAEF",
                            backgroundColor: "#E11B45",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                        },
                    },
                },
            ],
        },
    },
});
theme = responsiveFontSizes(theme);
export default theme;
