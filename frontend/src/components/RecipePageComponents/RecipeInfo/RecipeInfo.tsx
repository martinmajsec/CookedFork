import { Box } from "@mui/material";
import theme from "../../../styles/theme";
import CalorieInfo from "../CalorieInfo/CalorieInfo";
import GeneralInfo from "../GeneralInfo/GeneralInfo";

const RecipeInfo = () => {
    return (
        <Box
            id="info"
            sx={{
                width: "90%",
                display: { md: "flex", xs: "flex column" },
                justifyContent: "space-between",
                mb: 5,
            }}
            color={theme.palette.textBlack.main}
        >
            <GeneralInfo />
            <CalorieInfo />
        </Box>
    );
};

export default RecipeInfo;
