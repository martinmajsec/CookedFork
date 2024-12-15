import { Box } from "@mui/material";
import cookedLogo from "../../../assets/primary-logo-black.svg";

const Logo = () => {
    return (
        <Box
            component="img"
            src={cookedLogo}
            sx={{
                mb: "1px",
                height: 0.8,
                objectFit: "contain",
            }}
        />
    );
};

export default Logo;
