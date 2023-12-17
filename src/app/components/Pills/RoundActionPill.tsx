import { Box } from "@mui/material";
import React from "react";

type RoundActionPillPropTypes = {
  action: any;
  text: string;
};

const RoundActionPill = (props: RoundActionPillPropTypes) => {
  const { action, text } = props;
  return (
    <Box
      component={"span"}
      onClick={action}
      sx={{
        width: "fit-content",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 13,
        whiteSpace: "no-wrap",
        borderRadius: 50,
        // backgroundColor: "#000000",
        border: "2px solid #000000",
        color: "black",
        fontWeight: "bold",
        paddingX: 1,
        paddingY: 0.5,
        transition: "0.2s ease",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#000000",
          color: "white",
        },
      }}
    >
      {text}
    </Box>
  );
};

export default RoundActionPill;
