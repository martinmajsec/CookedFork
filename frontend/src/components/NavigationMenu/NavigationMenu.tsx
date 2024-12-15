import { Box,Stack,} from "@mui/material";
import { CollectionsBookmark } from "@mui/icons-material";
import ExploreIcon from "@mui/icons-material/Explore";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NavButton from "../Buttons/NavButton/NavButton";

const NavigationMenu = () => {
    return (
        <Box>
            <Stack direction={"row"} spacing={2}>
                <NavButton icon={<CollectionsBookmark />} text="Collection" to="/collection"/>
                <NavButton icon={<ExploreIcon />} text="Explore" to="/explore"/>
                <NavButton icon={<HomeIcon />} text="Home" to="/"/>
                <NavButton icon={<SearchIcon />} text="Search" />
            </Stack>
        </Box>
    );
};

export default NavigationMenu;
