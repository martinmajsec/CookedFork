import {
    Container,
    ThemeProvider,
    Typography,
    useMediaQuery,
} from "@mui/material";
import React from "react";
import theme from "../styles/theme";
import Header from "../components/Header/Header";

//////////////////TODO////////////////////////

/* type Props = {}; */

const CollectionPage = (/* props: Props */) => {
    return (
        <ThemeProvider theme={theme}>
            <Header></Header>
            <Container
                sx={{
                    pt: "92px",
                    display: "flex",
                    flexDirection: "column",
                    width: "100dvw",
                    alignItems: "center",
                    gap: 4,
                    pb: 4,
                }}
                disableGutters={useMediaQuery(theme.breakpoints.only("xl"))}
            >
                <Typography variant="h1" color="black">
                    Collection page
                </Typography>
            </Container>
        </ThemeProvider>
    );
};

export default CollectionPage;
