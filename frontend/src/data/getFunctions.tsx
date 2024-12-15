import axios from "axios";

async function getRecipe() {
    try {
        const response = await axios.get(
            "https://corsproxy.io/?https://backend-0dy6.onrender.com/api/recipes"
        );
        return response.data[0];

        /*if (response.data && Array.isArray(response.data)) {
            return response.data[0];
        } else {
            console.error("Invalid format");
            return [];
        }*/
    } catch (err) {
        console.log("Error while trying to get recipe from backend!");
        console.error(err);
        return {};
    }
}

const data = await getRecipe();
export default data;
