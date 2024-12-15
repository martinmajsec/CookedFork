import { Container, ThemeProvider } from "@mui/material";
import theme from "../styles/theme";
import recipeImage from "../assets/images/friedchicken.jpg"; //temporary for testing
import Header from "../components/Header/Header";
import Steps from "../components/RecipePageComponents/Steps/Steps";
import Ingredients from "../components/RecipePageComponents/Ingredients/Ingredients";
import RecipeDetails from "../components/RecipePageComponents/RecipeDetails/RecipeDetails";
import { createContext, useEffect } from "react";
import data from "../data/getFunctions";

const recipe = data;

export const RecipePageContext = createContext(recipe);

const RecipePage = () => {
    useEffect(() => {
        // Scroll to top whenever this page is rendered
        window.scrollTo(0, 0);
    }, []);

    return (
        <RecipePageContext.Provider value={recipe}>
            <ThemeProvider theme={theme}>
                <Header></Header>
                <Container
                    className="slide-in-container-1s"
                    sx={{
                        pt: "92px", //paddingtop because of a fixed header
                        backgroundColor: theme.palette.textWhite.main,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        pb: 4,
                    }}
                >
                    <img
                        src={recipeImage}
                        style={{
                            width: "90%",
                            maxHeight: "350px",
                            objectFit: "cover",
                            margin: "20px",
                            //marginTop: 0,
                            borderRadius: "10px",
                        }}
                    ></img>

                    <RecipeDetails />
                    <Ingredients />
                    <Steps />
                </Container>
            </ThemeProvider>
        </RecipePageContext.Provider>
    );
};

export default RecipePage;
