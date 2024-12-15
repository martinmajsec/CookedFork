import { Box, Typography } from "@mui/material";
import theme from "../../../styles/theme";
import image from "../../../assets/images/friedchicken.jpg";

interface CarouselItemProps {
    stepId: number;
    item: {
        imagePath: string;
        imageId: number;
        imageDescription?: string;
    };
}

const CarouselItem: React.FC<CarouselItemProps> = ({ item, stepId }) => {
    return (
        <Box
            gap={2}
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                p: 2,
            }}
        >
            <img
                src={image}
                alt={item.imageDescription}
                style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                    borderRadius: "30px",
                    filter: "drop-shadow(0px 4px 3px rgba(83, 78, 156, 0.7))",
                }}
            />
            <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={2}
            >
                <Typography
                    variant="subtitle1"
                    color={theme.palette.textBlack.main}
                    lineHeight={0.9}
                >
                    Step {stepId}
                </Typography>
                <Typography
                    variant="body1"
                    color={theme.palette.textBlack.main}
                >
                    {item.imageDescription}
                </Typography>
            </Box>
        </Box>
    );
};

export default CarouselItem;
