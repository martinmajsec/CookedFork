import Carousel from "react-material-ui-carousel";
import theme from "../../../styles/theme";
import CarouselItem from "../CarouselItem/CarouselItem";

interface ImageCarouselProps {
    stepid: number,
    stepImageItem: {
        imagePath:string,
        imageId:number,
        imageDescription?: string
    }[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({stepImageItem, stepid}) => {
    
    return (
        <Carousel
            cycleNavigation={false}
            animation="fade"
            duration={300}
            autoPlay={false}

            indicatorContainerProps={{
                style: {
                    paddingTop: "0rem",
                    marginTop: "0"
                }
            }}
            indicatorIconButtonProps={{
                style:{
                    marginRight: "4px",
                    color: theme.palette.accent.main,
                   transition: "ease-in-out 0.0s"
                }
            }}
            activeIndicatorIconButtonProps={{
                style:{
                    marginRight: "4px",
                    color: theme.palette.accent.main,
                    border: "3px solid rgba(83, 78, 156, 1)",
                    transition: "ease-in-out 0.0s"
                }
            }}
            navButtonsAlwaysVisible={true}
            fullHeightHover={false}
            navButtonsProps={{             
                style: {
                    marginLeft: "1.5rem",
                    marginRight: "1.5rem",    
                    backgroundColor: theme.palette.accent.main                
                },
                
            }}
            navButtonsWrapperProps={{
                style: {
                    top: "17px",
                    height:"250px",
                },
            }}
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "max-content",
                width: "500px",
            }}
        >
            {stepImageItem.map((item, index) => (
                <CarouselItem key={index} item={item} stepId={stepid}/>
            ))}
        </Carousel>
    );
};

export default ImageCarousel;
