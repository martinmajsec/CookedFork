import {
    Box,
    Chip,
    Grid2,
    Rating,
    Stack,
    Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React from "react";
import theme from "../../styles/theme";
import { Link } from "react-router-dom";
import image from "../../assets/images/friedchicken.jpg";

type Props = {
    recipeId: number;
    recipeTitle: string;
    recipeImg?: string;
    cookingTime: string;
    firstName: string;
    lastName: string;
    rating?: number;
    tags?: string[];
};

const RecipeCard: React.FC<Props> = ({
    recipeId,
    recipeTitle,
    //recipeImg,
    cookingTime,
    firstName,
    lastName,
    rating,
    tags = [],
}) => {
    tags = ["Comfort Food", "Crispy", "Dinner"];
    return (
        <Link
            to={`/recipe/`} //`/recipe/${recipeId}`
            style={{
                textDecoration: "none",
                color: "inherit",
            }}
        >
            <Grid2
                sx={{
                    textDecoration: "none",
                    gap: 1,
                    padding: 3,
                    width: "275px",
                    height: "375px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "column",
                    backgroundColor: (theme) => theme.palette.textWhite.main,
                    borderRadius: "30px",
                    filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.2))",
                    transition: "ease-in-out 0.18s",
                    ":hover": {
                        transform: "scale(1.03)",
                        filter: "drop-shadow(0px 0px 14px rgba(83, 78, 156, 1))",
                        outline: "3px solid rgba(83, 78, 156, 0.3)",
                    },
                }}
            >
                <Box
                    sx={{
                        gap: 1,
                        width: 1,
                        height: 0.9,
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            height: 0.6,
                            backgroundImage: `url(${image})`,
                            backgroundPosition: "center, bottom left",
                            backgroundSize: "cover, cover",
                            borderRadius: "20px",
                        }}
                    ></Box>
                    <Box
                        sx={{
                            height: "min-content",
                            display: "flex",
                            flexDirection: "column",
                            gap: 1,
                        }}
                    >
                        <Typography
                            variant="body1"
                            color={theme.palette.secondary.main}
                            fontWeight={theme.fontWeights.bold}
                            lineHeight={1.1}
                        >
                            {recipeTitle}
                        </Typography>
                        {tags.length > 0 && (
                            <Stack
                                direction="row"
                                flexWrap={"nowrap"}
                                gap={1}
                                sx={{
                                    paddingBottom: 1,
                                    overflowX: "auto",
                                    whiteSpace: "nowrap",
                                    transition: "ease-in-out 0.5s",

                                    "&::-webkit-scrollbar": {
                                        height: "4px",
                                    },
                                    "&::-webkit-scrollbar-thumb": {
                                        backgroundColor: "#534E9C",
                                        borderRadius: "30px",
                                    },
                                    "&:hover::-webkit-scrollbar": {
                                        height: "8px",
                                    },
                                }}
                            >
                                {tags.map((tag, index) => (
                                    <Chip
                                        key={index}
                                        label={`#${tag.replace(/\s+/g, "")}`}
                                        sx={{
                                            fontSize: "12px",
                                            color: "#FEFAEF",
                                            backgroundColor: "#534E9C",
                                        }}
                                    />
                                ))}
                            </Stack>
                        )}
                        {rating ? (
                            <Rating
                                icon={<FavoriteIcon fontSize="inherit" />}
                                emptyIcon={
                                    <FavoriteBorderIcon fontSize="inherit" />
                                }
                                name="read-only"
                                size="medium"
                                readOnly
                                value={rating}
                                sx={{
                                    width: "100%",
                                    "& .MuiRating-iconFilled": {
                                        color: "#E11B45",
                                    },
                                }}
                            />
                        ) : null}
                    </Box>
                </Box>

                <Box
                    sx={{
                        width: 1,
                        height: "min-content",
                        display: "flex",
                        gap: 1,
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                    }}
                >
                    <Typography
                        variant="subtitle1"
                        color={theme.palette.textBlack.main}
                        lineHeight={1}
                    >
                        Created By: {firstName} {lastName}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color={theme.palette.textBlack.main}
                        lineHeight={1}
                    >
                        {cookingTime}
                    </Typography>
                </Box>
            </Grid2>
        </Link>
    );
};

export default RecipeCard;
