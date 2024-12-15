import { Box, Typography, Grid2 } from "@mui/material";
import theme from "../../../styles/theme";
import { useContext } from "react";
import { RecipePageContext } from "../../../pages/RecipePage";

/*komponenta koja prikazuje popis sastojaka u grid formatu*/

const Ingredients = () => {
    const recipe = useContext(RecipePageContext);
    return (
        <Box
            id="ingredients"
            sx={{ width: "90%", textAlign: "left", mb: 3, mt: 2 }}
        >
            <Typography
                variant="h3"
                color={theme.palette.textBlack.main}
                gutterBottom
                sx={{
                    textDecoration: "underline",
                    textDecorationColor: theme.palette.primary.main,
                    textDecorationThickness: "2px",
                }}
            >
                • What you'll need:
            </Typography>
            <Grid2 container spacing={4} columns={3} sx={{ padding: 2 }}>
                {recipe.ingredientSections.map((ingredientSection) =>
                    ingredientSection.ingredients.map((ingredient) => (
                        <div
                            style={{ width: "30%" }}
                            key={ingredient.ingredientId}
                        >
                            <Grid2>
                                <Typography
                                    color={theme.palette.textBlack.main}
                                    variant="body1"
                                >
                                    • {ingredient.foodName} {ingredient.amount}
                                    {
                                        ingredient.measurementUnit
                                            .measurementUnitName
                                    }
                                </Typography>
                            </Grid2>
                        </div>
                    ))
                )}
            </Grid2>
        </Box>
    );
};

export default Ingredients;
