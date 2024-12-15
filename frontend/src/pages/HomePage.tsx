import {
    Container,
    ThemeProvider,
    Typography,
    useMediaQuery,
    Box,
} from "@mui/material";
import theme from "../styles/theme";
import Header from "../components/Header/Header";
import HeroImage from "../components/HomePageComponents/HeroImage/HeroImage";
import RecipeContainer from "../components/RecipeContainer/RecipeContainer";
import recipe from "../data/homePageFormatJSON";

const HomePage = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container
                sx={{
                    pt: "92px",
                    display: "flex",
                    flexDirection: "column",
                    width: "100dvw",
                    alignItems: "center",
                    gap: 4,
                    pb: 4
                }}
                disableGutters={useMediaQuery(theme.breakpoints.only("xl"))}
            >
                <Header></Header>
                <HeroImage></HeroImage>
                <Box
                    className= "slide-in-container-05s"
                    sx={{
                        width: 1,
                        display: "flex",
                        justifyContent: "start",
                    }}
                >
                    <Typography
                        component="div"
                        sx={{ display: "flex", alignItems: "center" }}
                    >
                        <Typography
                            variant="h3"
                            component="span"
                            color={theme.palette.textBlack.main}
                            fontWeight={theme.fontWeights.semibold}
                        >
                            Today’s
                        </Typography>
                        <Typography
                            variant="h3"
                            component="span"
                            color={theme.palette.primary.main}
                            fontWeight={theme.fontWeights.extrabold}
                            fontStyle={"italic"}
                            sx={{
                                mx: 1,
                                filter: "drop-shadow(0px 0px 4px rgba(225, 27, 69, 0.3))",
                            }}
                        >
                            Hottest Recipes
                        </Typography>
                        <Typography
                            variant="h3"
                            component="span"
                            color={theme.palette.textBlack.main}
                            fontWeight={theme.fontWeights.semibold}
                        >
                            –Just for You:
                        </Typography>
                    </Typography>
                </Box>
                <RecipeContainer data={recipe}></RecipeContainer>
            </Container>
        </ThemeProvider>
    );
};

export default HomePage;
