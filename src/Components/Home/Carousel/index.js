import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { IconButton } from "@mui/material";
import { autoPlay } from "react-swipeable-views-utils";
import Ratio from 'react-ratio';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "Golden Monday sale",
    imgPath:
      "https://banner.caratlane.com/live-images/198cee1a78b944748e2a43fd1740bf76.webp",
  },
  {
    label: "Rings",
    imgPath:
      "https://banner.caratlane.com/live-images/10c2cf82f2ad425b960f2587933652a7.jpg",
  },
  {
    label: "Earrings",
    imgPath:
      "https://banner.caratlane.com/live-images/4320a30823014770b49d6c35ba3508c9.jpg",
  },
  {
    label: "Bracelets",
    imgPath:
      "https://banner.caratlane.com/live-images/dab8c9bccb50479fbad968e7ea6ea450.webp",
  },
  {
    label: "Gifts",
    imgPath:
      "https://banner.caratlane.com/live-images/0b029eba578d4a31a4dbfa6095d3f3b3.webp",
  },
];

function Carousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ Width: "100%", flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
      {/* <Ratio ratio={ 16 / 9 }> */}
            <Box
              component="img"
              sx={{
                display: "block",
                overflow: "hidden",
                width: "-webkit-fill-available",
                height: "-webkit-fill-available",
                background: "transparent",
              }}
              src={step.imgPath}
              alt={step.label}
            />
        {/* </Ratio> */}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <Box
        sx={{
          position: "relative",
          bottom: "4rem",
          width: "min-content",
          display: "flex",
          justifyContent: "center",
          width: "100vw",
        }}
      >
        <MobileStepper
          sx={{
            background: "rgb(255 255 255 / 5%)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5px)",
            borderRadius: "1rem",
            marginBlockEnd: 1,
            p: 0,
            borderRadius: "5rem",
            p: 0.5,
          }}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <IconButton
              size="small"
              sx={{ border: 2.5, ml: 1, color: "primary.main" }}
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </IconButton>
          }
          backButton={
            <IconButton
              size="small"
              sx={{ border: 2.5, mr: 1, color: "primary.main" }}
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
            </IconButton>
          }
        />
      </Box>
    </Box>
  );
}

export default Carousel;
