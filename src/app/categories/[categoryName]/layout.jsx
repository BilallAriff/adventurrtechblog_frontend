"use client";

import BackdropHeading from "@/app/components/BackdropHeading/BackdropHeading";
import NavList from "@/app/components/NavigationList/NavList";
import NavListItem from "@/app/components/NavigationList/NavListItem";
import NavListText from "@/app/components/NavigationList/NavListText";
import { Box, Grid, Container } from "@mui/material";
import { useParams } from "next/navigation";
import React from "react";

const Layout = (props) => {
  const { children } = props;
  const params = useParams();
  return (
    <Grid container>
      <Grid item md={12}>
        <Box
          sx={{
            backgroundImage:
              "url(/images/featured_blogs/cropped-metaverse.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "350px",
          }}
          className={"flex-all-center"}
        >
          <BackdropHeading>{params?.categoryName}</BackdropHeading>
        </Box>
      </Grid>
      <Grid item md={12}>
        <Container>
          <Box className="flex-all-center">
            <Box my={5} width={"fit-content"}>
              <NavList>
                {subCategories.map((subCategory, index) => {
                  return (
                    <NavListItem key={index}>
                      <NavListText>{subCategory}</NavListText>
                    </NavListItem>
                  );
                })}
              </NavList>
            </Box>
          </Box>
        </Container>
      </Grid>
      <Grid>{children}</Grid>
    </Grid>
  );
};

export default Layout;

const subCategories = [
  "Technology",
  "Science",
  "Engineering",
  "Metavers",
  "Trends",
  "Gadgets",
];
