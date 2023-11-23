"use client";
import React from "react";

import { Grid, Container, Box, Button, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import Image from "next/image";

const FeaturedBlogSliderV2 = ({ blogs }: any) => {
  var items = [
    {
      name: "How MetaVerse will change the world we see today",
      description:
        "learn everything you need to know about the modern emerging technology MetaVerse by Facebook and how it impacts our day to day life",
      backgroundColor: "#2E294E",
      image: "/images/featured_blogs/cropped-metaverse.jpg",
    },
    {
      name: "Netflix - The case study",
      description:
        "ever though of the psychology of netflix, how can you not stop watching that episode thouh you have to wake up early in the morning",
      backgroundColor: "#C5D86D",
      image: "images/featured_blogs/cropped-netflix.jpg",
    },
  ];

  function Item(props: any) {
    return (
      <Box
        sx={{
          // border: "1px solid red",
          width: "100%",
          height: "450px",
          backgroundImage:
            "url(images/featured_blogs/google-deep-mind-cover.jpg)",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            backdropFilter: "blur(1px)",
            borderRadius: "4px",
            px: 10,
            py: 0.4,
          }}
        >
          <Typography fontWeight={800} fontSize={36} color={"#02145acf"}>
            Artificial Inteligence
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            backdropFilter: "blur(1px)",
            borderRadius: "4px",
            mt: 2,
            px: 10,
            py: 0.4,
          }}
        >
          <Typography fontWeight={600} fontSize={18} color={"#02145acf"}>
            Future, Pressent, Past, how AI has changed the way we see and
            interact with the wold
          </Typography>
        </Box>
      </Box>
    );
  }
  return (
    <Grid item md={12}>
      <Carousel>
        {/* {items?.map((item: any, i: number) => ( */}
        <Item
        // key={i} item={item}
        />
        {/* ))} */}
      </Carousel>
    </Grid>
  );
};

export default FeaturedBlogSliderV2;
