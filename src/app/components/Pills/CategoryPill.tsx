import { Box } from "@mui/material";
import React from "react";

const CategoryPill = (props: { text: string }) => {
  const { text } = props;

  return (
    <Box
      sx={{
        width: "fit-content",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 10,
        backgroundColor: "#000000",
        color: "white",
        paddingX: 1,
        paddingY: 0.5,
      }}
    >
      {text}
    </Box>
  );
};

export default CategoryPill;
