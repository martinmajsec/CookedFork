import { Box, Typography } from "@mui/material";
import theme from "../../../styles/theme";
import { useContext } from "react";
import { RecipePageContext } from "../../../pages/RecipePage";

/*komponenta koja prikazuje podatke dobivene od FatSecret API-a
(trenutno su hard kodirani podatci budući da još nismo ostvarili komunikaciju s navedenim API-jem)
*/

const CalorieInfo = () => {
    const recipe = useContext(RecipePageContext);
    return (
        <Box
            id="calorie-info"
            sx={{
                /*border: "2px solid",
                borderColor: theme.palette.accent.main,
                borderRadius: 10,*/
                /*borderBottom: "2px solid ",
                borderColor: theme.palette.accent.main,*/
                padding: 2,
                mt: 3,
                width: { md: "25%", xs: "70%" },
            }}
        >
            <Typography component="span">Total calories: </Typography>
            <Typography component="span" color={theme.palette.secondary.main}>
                {/*recipe.calories*/}1000 kcal
            </Typography>
            <Typography sx={{ mt: 2 }}>Macronutrients:</Typography>
            <Typography
                sx={{ ml: 2 }}
                color={theme.palette.textBlack.main}
                variant="body1"
            >
                • Proteins: 123g
            </Typography>
            <Typography
                sx={{ ml: 2 }}
                color={theme.palette.textBlack.main}
                variant="body1"
            >
                • Carbohydrates: 123g
            </Typography>
            <Typography
                sx={{ ml: 2 }}
                color={theme.palette.textBlack.main}
                variant="body1"
            >
                • Of which sugars: 123g
            </Typography>
            <Typography
                sx={{ ml: 2 }}
                color={theme.palette.textBlack.main}
                variant="body1"
            >
                • Fats: 123g
            </Typography>
            <Typography
                sx={{ ml: 2 }}
                color={theme.palette.textBlack.main}
                variant="body1"
            >
                • Salt: 123g
            </Typography>
        </Box>
    );
};

export default CalorieInfo;
