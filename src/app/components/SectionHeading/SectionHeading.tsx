import { Box, Typography } from "@mui/material";
import React from "react";

type SectionHeadingPropTypes = {
  text: string | number;
  variant?: "title" | "section1" | "section2";
  sx?: object;
};

const SectionHeading = (props: SectionHeadingPropTypes) => {
  const { sx = {}, text, variant = "section1" } = props;

  const styles = {
    fontSize: 28,
    fontWeight: 900,
    position: "relative",
    "::after": {
      width: "80%",
      height: "5px",
      backgroundColor: "#000000",
      position: "absolute",
      bottom: "1px",
      left: "1px",
      content: '""',
    },
    ...sx,
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography sx={styles}>{text}</Typography>
    </Box>
  );
};

export default SectionHeading;
