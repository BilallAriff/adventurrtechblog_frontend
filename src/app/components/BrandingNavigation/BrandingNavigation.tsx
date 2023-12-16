"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import BusinessLogo from "../BusinessLogo/BusinessLogo";
import SocialContacts from "../SocialContacts/SocialContacts";
import Container from "../Container/Container";
import BusinessLogoV2 from "../BusinessLogoV2/BusinessLogoV2";

export default function BrandingNavigation() {
  return (
    <Box sx={{ backgroundColor: "#000000", paddingY: 1 }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
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
            <Box>
              <BusinessLogoV2 />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SocialContacts size="large" variant={"white"} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
