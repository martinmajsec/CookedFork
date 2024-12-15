import { Container, ThemeProvider, Typography, useMediaQuery } from "@mui/material";
import theme from "../styles/theme";
import Header from "../components/Header/Header";

const ExplorePage = () => {
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
                    Explore page
                </Typography>
            </Container>
        </ThemeProvider>
    );
};

export default ExplorePage;
