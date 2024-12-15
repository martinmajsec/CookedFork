import { Box, Typography } from "@mui/material";
import React from "react";
import theme from "../styles/theme";
import { Link } from "react-router-dom";

/* type Props = {}; */

const NotFoundPage = (/* props: Props */) => (
    <Box
        sx={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            backgroundColor: theme.palette.backgroundWhite.main,
        }}
    >
        <Typography
            variant="h1"
            fontWeight={theme.fontWeights.bold}
            color={theme.palette.textBlack.main}
        >
            404 NOT FOUND
        </Typography>

        <Typography
            variant="h3"
            component={Link}
            to="/"
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "7rem",
                backgroundColor: theme.palette.primary.main,
                padding: 3,
                borderRadius: "30px",
                textDecoration: "none",
                transition: "ease-in-out 0.18s",
                "&:hover": {
                    transform: "scale(1.03)",
                    filter: "drop-shadow(0px 8px 5px rgba(0, 0, 0, 0.3))",
                    border: "4px solid rgba(255, 255, 255, 0.8)",
                },
                color: theme.palette.textWhite.main, // Keeps color consistent if needed
            }}
        >
            Back To Cooked Home Page
        </Typography>
    </Box>
);

export default NotFoundPage;
