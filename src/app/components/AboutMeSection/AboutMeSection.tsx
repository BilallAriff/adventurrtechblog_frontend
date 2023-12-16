"use client";
import { useGetAboutMeQuery } from "@/app/redux/services/aboutMe";
import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import Markdown from "react-markdown";
import SocialContacts from "../SocialContacts/SocialContacts";

const AboutMeSection = () => {
  const { data: aboutMe } = useGetAboutMeQuery(null);

  return (
    <Container>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box sx={{ display: "flex", width: "50%" }}>
          <img style={{ width: "100%" }} src="images/users/bilal_arif.jpg" />
        </Box>
        <Box
          sx={{
            backgroundColor: "#e4e4e6",
            display: "flex",
            width: "50%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: 8,
              paddingLeft: 2,
              textAlign: "left",
            }}
          >
            <Typography
              sx={{
                width: "100%",
                textAlign: "left",
                fontWeight: 600,
                fontSize: 32,
                color: "#000722",
              }}
            >
              Bilal Arif
            </Typography>

            <Box>
              <Markdown>{aboutMe?.data?.attributes?.aboutMe}</Markdown>
            </Box>

            <Box sx={{ width: "100%", my: 2 }}>
              <SocialContacts
                containerStyle={{ justifyContent: "flex-start" }}
                variant="color"
              />
            </Box>
            <Box
              sx={{
                marginTop: 1,
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Button>Read More</Button>
                <span>|</span>
                <Button>Portfolio</Button>
                <span>|</span>
                <Button>Resume</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default AboutMeSection;
