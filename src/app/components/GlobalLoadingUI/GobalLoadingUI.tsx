import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";
import BusinessLogo from "../BusinessLogo/BusinessLogo";

const GlobalLoadingUI = () => {
  return (
    <Box
      sx={{
        // border: "1px solid red",
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        widht: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffff",
      }}
    >
      <Box
        sx={{
          //   border: "1px solid red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BusinessLogo />
          <Typography
            sx={{
              marginLeft: 1,
              fontWeight: 400,
              fontSize: 22,
              color: "#00000094",
            }}
          >
            Bilal Arif{" "}
          </Typography>
        </Box>
        <Box
          sx={{
            marginLeft: 2,
            // border: "1px solid green",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress size={20} />
        </Box>
      </Box>
    </Box>
  );
};

export default GlobalLoadingUI;
