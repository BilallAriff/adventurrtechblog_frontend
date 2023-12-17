import { Box, Typography } from "@mui/material";
import React from "react";

const HeaderComponent = (props: {
  image?: string;
  heading?: string;
  subHeading?: string;
}) => {
  const { image, heading, subHeading } = props;

  return (
    <Box
      sx={{
        // border: "1px solid red",
        width: "100%",
        height: "450px",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          // pointerEvents: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <Box sx={{ paddingX: 7, paddingBottom: 7, paddingRight: "40%" }}>
          <Typography
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
            }}
            fontWeight={400}
            fontSize={46}
            color={"#FFFFFF"}
          >
            {heading}
          </Typography>
          <Typography
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
            }}
            fontWeight={100}
            fontSize={18}
            my={2}
            color={"#FFFFFF"}
          >
            {subHeading}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderComponent;
