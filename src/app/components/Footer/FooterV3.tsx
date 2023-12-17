"use client";
import React from "react";
import { Box, Button, Container, Typography, styled } from "@mui/material";
import BusinessLogo from "../BusinessLogo/BusinessLogo";
import SocialContacts from "../SocialContacts/SocialContacts";

const FooterV3 = () => {
  const LinkItems = styled("span")({
    cursor: "pointer",
    marginLeft: 15,
    marginRight: 15,
    "&:hover": {
      textDecoration: "underline",
      textDecorationColor: "yellow",
    },
  });

  return (
    <Box sx={{ backgroundColor: "black", color: "white", paddingY: 10 }}>
      <Container>
        <Box
          sx={{
            // border: "1px solid red",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BusinessLogo disableAnimation size={"small"} />
          <Box
            sx={{
              mt: 1,
              dispaly: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button sx={{ color: "white !important" }}>Services</Button>
            <span style={{ marginLeft: "20px", marginRight: "20px" }}>|</span>
            <Button sx={{ color: "white !important" }}>Resume Download</Button>
            <span style={{ marginLeft: "20px", marginRight: "20px" }}>|</span>
            <Button sx={{ color: "white !important" }}>About me</Button>
          </Box>
          <Box
            sx={{
              borderTop: "1px solid lightgray",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 5,
            }}
            mt={3}
          >
            <Box sx={{ width: "fit-content" }}>
              <SocialContacts />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 5,
          }}
        >
          Copyright Bilal Arif @ Adventurr.tech
        </Box>
      </Container>
    </Box>
  );
};

export default FooterV3;
