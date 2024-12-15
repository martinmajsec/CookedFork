import { Box, Rating, Typography, Chip } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import theme from "../../../styles/theme";
import { useContext } from "react";
import { RecipePageContext } from "../../../pages/RecipePage";

/*komponenta koja prikazuje sljedeće podatke:
- ime i prezime korisnika koji je napravio recept
- ocjena (1-5) i broj ocjena
- je li recept privatan ili javan
*/

const RecipeDesc = () => {
    const recipe = useContext(RecipePageContext);
    return (
        <>
            <Box
                sx={{
                    width: "90%",
                    textAlign: "left",
                }}
            >
                <Typography
                    variant="h2"
                    color={theme.palette.secondary.main}
                    gutterBottom
                    fontWeight={theme.fontWeights.bold}
                    fontStyle="oblique"
                >
                    {recipe.title}
                </Typography>
                <Typography
                    variant="body1"
                    color={theme.palette.secondary.main}
                >
                    {recipe.description}
                </Typography>
            </Box>
            <Box
                sx={{
                    width: "90%",
                    textAlign: "left",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Typography
                    variant="h4"
                    color={theme.palette.textBlack.main}
                    sx={{ mt: 1, whiteSpace: "nowrap" }}
                >
                    Created by: {recipe.profile.firstName}{" "}
                    {recipe.profile.lastName}{" "}
                </Typography>
                {1 == 1 ? ( //TU TREBA ICI RATING
                    <Box sx={{ display: "flex" }}>
                        <Rating
                            icon={<FavoriteIcon fontSize="inherit" />}
                            emptyIcon={
                                <FavoriteBorderIcon fontSize="inherit" />
                            }
                            name="read-only"
                            size="medium"
                            readOnly
                            value={4}
                            sx={{
                                width: "100%",
                                "& .MuiRating-iconFilled": {
                                    color: "#E11B45",
                                },
                                mt: 1,
                                ml: 2,
                                mr: 0,
                            }}
                        />
                        <Typography
                            variant="subtitle1"
                            color={theme.palette.textBlack.main}
                            sx={{ mt: 1, ml: 0 }}
                        >
                            (123){/*numOfReviews*/}
                        </Typography>
                    </Box>
                ) : null}
            </Box>
            <Box
                sx={{
                    width: "90%",
                    display: "flex",
                    justifyContent: "left",
                    mt: 1,
                    ml: 2,
                }}
            >
                <Typography
                    color={theme.palette.textBlack.main}
                    fontWeight={theme.fontWeights.medium}
                    variant="subtitle1"
                    sx={{ mt: 0.5 }}
                >
                    *This recipe is{" "}
                </Typography>
                <Chip
                    label={recipe.private ? "private" : "public"}
                    sx={{
                        padding: 1,
                        ml: 1,
                        border: "3px solid",
                        borderColor: theme.palette.accent.main,
                    }}
                ></Chip>
            </Box>
        </>
    );
};

export default RecipeDesc;
