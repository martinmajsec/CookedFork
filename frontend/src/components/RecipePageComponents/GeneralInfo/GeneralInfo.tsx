import { Box, Typography, Chip } from "@mui/material";
import theme from "../../../styles/theme";
import { useContext } from "react";
import { RecipePageContext } from "../../../pages/RecipePage";

/*komponenta koja prikazuje sljedeće podatke:
- cookint time
- categories
- tags
- event
*/

const GeneralInfo = () => {
    const recipe = useContext(RecipePageContext);
    const tags = ["#Comfort Food", "#Crispy", "#Dinner"];
    const event = "Sister's wedding";
    return (
        <Box
            id="general-info"
            sx={{
                mt: 3,
                alignContent: "center",
                /*border: "2px solid",
                borderColor: theme.palette.secondary.main,
                borderRadius: 10,*/
                /*borderBottom: "2px solid ",
                borderColor: theme.palette.secondary.main,*/
                p: 2,
            }}
        >
            <Typography
                fontWeight={theme.fontWeights.medium}
                variant="body1"
                sx={{ mt: 0.5 }}
            >
                Cooking time: {recipe.time} mins
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    mt: 2,
                }}
            >
                <Typography
                    fontWeight={theme.fontWeights.medium}
                    variant="body1"
                >
                    Categories:
                </Typography>
                {recipe.categories?.map((category, index) => (
                    <Chip
                        key={index}
                        label={category.categoryName}
                        sx={{
                            padding: 1,
                            ml: 1,
                            bgcolor: theme.palette.primary.main,
                            color: theme.palette.textWhite.main,
                        }}
                    ></Chip>
                ))}
            </Box>
            <Box
                sx={{
                    display: "flex",
                    mt: 2,
                }}
            >
                <Typography
                    fontWeight={theme.fontWeights.medium}
                    variant="body1"
                >
                    Tags:{" "}
                </Typography>
                {tags?.map((tag, index) => (
                    <Chip
                        key={index}
                        label={tag}
                        sx={{
                            padding: 1,
                            ml: 1,
                            bgcolor: theme.palette.accent.main,
                            color: theme.palette.textWhite.main,
                        }}
                    ></Chip>
                ))}
            </Box>
            <Box
                sx={{
                    display: "flex",
                    mt: 2,
                }}
            >
                <Typography
                    fontWeight={theme.fontWeights.medium}
                    variant="body1"
                >
                    This recipe is part of event:
                </Typography>
                <Chip
                    label={event}
                    sx={{
                        padding: 1,
                        ml: 1,
                        bgcolor: theme.palette.secondary.main,
                        color: theme.palette.textWhite.main,
                    }}
                ></Chip>
            </Box>
        </Box>
    );
};

export default GeneralInfo;
