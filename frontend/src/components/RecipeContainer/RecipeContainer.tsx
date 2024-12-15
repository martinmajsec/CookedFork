import { Grid2 } from "@mui/material";
import { FC } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";

type Recipe = {
    recipeId: number;
    recipeTitle: string;
    recipeImg?: string;
    cookingTime: string;
    firstName: string;
    lastName: string;
    rating?: number;
    tags?: string[];
};

type Props = {
    data: Recipe[];
};

const RecipeContainer: FC<Props> = ({ data }) => {
    return (
        <Grid2 container spacing={4}>
            {data.map((recipe, index) => (
                <RecipeCard
                    key={index}
                    recipeId={recipe.recipeId}
                    recipeTitle={recipe.recipeTitle}
                    //recipeImg={recipe.recipeImg}
                    cookingTime={recipe.cookingTime}
                    firstName={recipe.firstName}
                    lastName={recipe.lastName}
                    rating={recipe.rating}
                    tags={recipe.tags}
                />
            ))}
        </Grid2>
    );
};

export default RecipeContainer;
