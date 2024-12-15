import { Button, SxProps } from "@mui/material";
import { FC, ReactNode } from "react";
import theme from "../../../styles/theme";
import { Theme } from "@emotion/react";
import { Link } from "react-router-dom";

type NavBtnProps = {
    icon: ReactNode;
    text: string;
    sx?: SxProps<Theme>;
    to?: string;
};

const NavButton: FC<NavBtnProps> = ({ icon, text, sx, to = ""}) => {
    return (
        <Button
            component={Link}
            to={to}
            variant="navbtn"
            sx={{
                textTransform: "none",
                color: theme.palette.textBlack.main,
                ...sx,
            }}
            endIcon={icon}
            
        >
            {text}
        </Button>
    );
};

export default NavButton;
