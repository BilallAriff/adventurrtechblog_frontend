"use client";
import React from "react";
import { Box, Container, Typography, styled } from "@mui/material";
import BusinessLogo from "../BusinessLogo/BusinessLogo";
import NavList from "../NavigationList/NavList";
import NavListItem from "../NavigationList/NavListItem";
import NavSocialIcon from "../NavigationList/NavSocialIcon";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const FooterV2 = () => {
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
    <Box paddingTop={3} borderTop={"1px solid lightgray"}>
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
            <LinkItems>Team</LinkItems>
            <LinkItems>Services</LinkItems>
            <LinkItems>About Us</LinkItems>
            <LinkItems>Portfolio</LinkItems>
          </Box>
          <Box mt={3}>
            <NavList>
              <NavListItem>
                <NavSocialIcon
                  sx={{
                    fontSize: 18,
                    color: "#1877F2",
                    borderColor: "#1877F2",
                  }}
                >
                  <FacebookIcon />
                </NavSocialIcon>
              </NavListItem>
              <NavListItem>
                {" "}
                <NavSocialIcon
                  sx={{
                    fontSize: 18,
                    color: "#fbad50",
                    borderColor: "#fbad50",
                  }}
                >
                  <InstagramIcon />
                </NavSocialIcon>
              </NavListItem>
              <NavListItem>
                <NavSocialIcon
                  sx={{
                    fontSize: 18,
                    color: "#0077b5",
                    borderColor: "#0077b5",
                  }}
                >
                  <LinkedInIcon />
                </NavSocialIcon>
              </NavListItem>
              <NavListItem>
                {" "}
                <NavSocialIcon
                  sx={{
                    fontSize: 18,
                    color: "#CD201F",
                    borderColor: "#CD201F",
                  }}
                >
                  <YouTubeIcon />
                </NavSocialIcon>
              </NavListItem>
              <NavListItem>
                {" "}
                <NavSocialIcon
                  sx={{
                    fontSize: 18,
                    color: "#1DA1F2",
                    borderColor: "#1DA1F2",
                  }}
                >
                  <TwitterIcon />
                </NavSocialIcon>
              </NavListItem>
              <NavListItem>
                <NavSocialIcon
                  sx={{
                    fontSize: 18,
                    color: "#DAF7A6",
                    borderColor: "#DAF7A6",
                  }}
                >
                  <MailOutlineIcon />
                </NavSocialIcon>
              </NavListItem>
            </NavList>
          </Box>
        </Box>
      </Container>
      <Box
        sx={{ padding: 2, mt: 3, width: "100%", backgroundColor: "#000722" }}
      >
        <Typography color="white" fontSize={12} textAlign={"center"}>
          Copyright Bial Arif | Adventurr Tech &copy
        </Typography>
      </Box>
    </Box>
  );
};

export default FooterV2;
