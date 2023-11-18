"use client";
import React from "react";

import { Grid, Container, Box, Button, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import Image from "next/image";

const FeaturedBlogSlider = ({ blogs }: any) => {
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
          //   backgroundColor: `${props.item?.backgroundColor}`,
          background: `url(${process.env.NEXT_PUBLIC_STRAPI_BASE_ASSET_URL}${props?.item?.attributes?.thumbnail?.data?.attributes?.formats?.large?.url})`,
          backgroundSize: "cover",
          height: 350,
          borderRadius: "4px",
        }}
      >
        <Box
          //   className="flex"
          sx={{
            display: "flex",
            alignContent: "flex-end",
            justifyContent: "end",
            flexDirection: "column",
            textAlign: "center",
            // border: "1px solid green",
            height: "100%",
            padding: "5rem 10rem",
          }}
        >
          <Typography
            variant="h5"
            fontWeight={800}
            borderRadius={"4px"}
            paddingX={5}
            paddingY={0.3}
            color={"white"}
            sx={{ backgroundColor: "#00072275" }}
          >
            {props?.item?.attributes?.title}
          </Typography>
          <Typography
            // fontWeight={800}
            borderRadius={"4px"}
            mt={1}
            paddingX={5}
            paddingY={0.3}
            color={"white"}
            sx={{ backgroundColor: "#00072275" }}
          >
            {props?.item?.attributes?.shortDescription}
          </Typography>
          {/* <img
            alt="fffff"
            src={`${process.env.NEXT_PUBLIC_STRAPI_BASE_ASSET_URL}${props?.item?.attributes?.thumbnail?.data?.attributes?.formats?.large?.url}`}
            width={"1000px"}
            height={"500px"}
          />
          <button
            onClick={() =>
              console.log({
                base_url: process.env.NEXT_PUBLIC_STRAPI_BASE_ASSET_URL,
                props,
                thumbnail:
                  props?.item?.attributes?.thumbnail?.data?.attributes?.formats
                    ?.large?.url,
              })
            }
          >
            console
          </button> */}
        </Box>
        {/* <h2>{props.item.name}</h2>
        <p>{props.item.description}</p> */}
        {/* <Button className="CheckButton">Check it out!</Button> */}
      </Box>
    );
  }
  return (
    <Grid item md={12}>
      <Container>
        <Carousel>
          {blogs?.map((item: any, i: number) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </Container>
    </Grid>
  );
};

export default FeaturedBlogSlider;
