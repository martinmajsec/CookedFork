import { Box, Typography } from "@mui/material";
import theme from "../../../styles/theme";
import ImageCarousel from "../../CarouselComponents/ImageCarousel/ImageCarousel";
import { useContext } from "react";
import { RecipePageContext } from "../../../pages/RecipePage";

const Steps = () => {
    const recipe = useContext(RecipePageContext);

    return (
        <Box id="recipe-steps" sx={{ width: "90%" }}>
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
                • Recipe steps:
            </Typography>
            {recipe.steps.map((step, index) => (
                <Box sx={{ mb: 0 }} key={index}>
                    <Typography
                        variant="h5"
                        color={theme.palette.textBlack.main}
                        sx={{
                            textDecoration: "underline",
                            textDecorationColor: theme.palette.accent.main,
                            textDecorationThickness: "2px",
                        }}
                    >
                        Step {index + 1}
                    </Typography>
                    <Typography color={theme.palette.textBlack.main}>
                        {step.stepDescription}
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            mt: 1,
                        }}
                    >
                        <ImageCarousel stepImageItem={step.images} stepid={step.stepId}/>
                    </Box>
                </Box>
            ))}
        </Box>
    );
};

export default Steps;
