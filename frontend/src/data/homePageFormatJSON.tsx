import axios from "axios";

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

function formatCookingTime(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    let timeString = "";
    if (hours > 0) {
        timeString += `${hours} hour${hours > 1 ? "s" : ""}`;
    }
    if (remainingMinutes > 0) {
        if (timeString) {
            timeString += " ";
        }
        timeString += `${remainingMinutes} minute${
            remainingMinutes > 1 ? "s" : ""
        }`;
    }

    return timeString || "Less than 1 minute";
}

function parseRecipeData(recipes: any[]): Recipe[] {
    return recipes.map((recipe) => {
        /* const mainImage =
            recipe.thumbnail; */
        const firstName = recipe.profile?.firstName;
        const lastName = recipe.profile?.lastName;
        const rating = recipe.rating || 0;
        const cookingTime = formatCookingTime(recipe.time);
        //const tags = recipe.tags;
        return {
            recipeId: recipe.recipeId,
            recipeTitle: recipe.title,
            /* recipeImg: mainImage, */
            cookingTime,
            firstName,
            lastName,
            rating,
            //tags,
        };
    });
}

async function fetchRecipes() {
    try {
        const response = await axios.get(
            "https://corsproxy.io/?https://backend-0dy6.onrender.com/api/recipes"
        );

        if (response.data && Array.isArray(response.data)) {
            const parsedData = parseRecipeData(response.data);
            return parsedData;
        } else {
            console.error("Invalid format");
            return [];
        }
    } catch (error) {
        console.error("Error fetching data", error);
        return [];
    }
}

/* const recipeFinished = {
    recipeId: 1,
    profile: {
        profileId: 1,
        userName: "johndoe",
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
        password: "password123",
        admin: false,
    },
    title: "Indijska Piletina Tikka Masala",
    description:
        "Iako vodi porijeklo iz Indije, toliko je popularno u Velikoj Britaniji da ga neki čak smatraju njihovim nacionalnim jelom. Mene je privukao egzotični ukus piletine iz marinade. Uglavnom se služi uz rižu.",
    servingsCount: 2,
    time: 60,
    private: false,
}; */

const data = await fetchRecipes();
export default data;
