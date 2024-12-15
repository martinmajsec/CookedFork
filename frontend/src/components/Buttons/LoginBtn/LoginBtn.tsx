import { Button } from "@mui/material";
import theme from "../../../styles/theme";

const LoginBtn = () => {
    return (
        <Button
            sx={{
                mb: "1px",
                width: "100px",
                borderRadius: "30px",
                textTransform: "none",
                color: theme.palette.textWhite.main,
                bgcolor: theme.palette.primary.main,
                fontSize: 16,
                ":hover": {
                    transition: "ease-in-out 0.15s",
                    transform: "scale(1.05)",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                },
            }}
        >
            Log In
        </Button>
    );
};

export default LoginBtn;
