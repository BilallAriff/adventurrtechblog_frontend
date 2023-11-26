import React from "react";
import { Box, Typography } from "@mui/material";

const BackdropHeading = (props: any) => {
  const { fontSize, fontWeight, color, children } = props;
  return (
    <Box
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(1px)",
        borderRadius: "4px",
        px: 10,
        py: 0.4,
      }}
    >
      <Typography
        fontWeight={fontWeight ? fontWeight : 800}
        fontSize={fontSize ? fontSize : 36}
        color={color ? color : "#02145acf"}
      >
        {children}
      </Typography>
    </Box>
  );
};

export default BackdropHeading;
