import { Box, Typography } from "@mui/material";
import image from "../../../assets/images/hero.jpg";
import theme from "../../../styles/theme";
import logo from "../../../assets/primary-logo-white.svg";

const HeroImage = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "25rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundImage: `url(${image})`,
                backgroundPosition: "center, bottom left",
                backgroundSize: "cover, cover",
                borderRadius: "30px",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    borderRadius: "30px",
                    width: 1,
                    height: 1,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        columnGap: "1rem",
                    }}
                >
                    <Typography
                        variant="h1"
                        color={theme.palette.textWhite.main}
                        fontWeight={theme.fontWeights.bold}
                        sx={{
                            lineHeight: 0.8,
                            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.7))",
                        }}
                    >
                        Welcome to
                    </Typography>
                    <img
                        src={logo}
                        alt=""
                        style={{
                            width: "15rem",
                            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.7))",
                            transform: "translate(0%, -28%)",
                        }}
                    />
                    <Typography
                        variant="h1"
                        color={theme.palette.textWhite.main}
                        fontWeight={theme.fontWeights.bold}
                        sx={{
                            lineHeight: 0.8,
                            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.7))",
                        }}
                    >
                        !
                    </Typography>
                </Box>
                <Typography
                    variant="h4"
                    fontWeight={theme.fontWeights.regular}
                    color={theme.palette.textWhite.main}
                    sx={{
                        mt: -2,
                        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.7))",
                    }}
                >
                    Your Solution To Cooking The Meal Of The Day.
                </Typography>
            </Box>
        </Box>
    );
};

export default HeroImage;
