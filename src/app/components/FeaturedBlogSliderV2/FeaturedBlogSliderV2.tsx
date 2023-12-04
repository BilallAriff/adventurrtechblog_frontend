"use client";
import React from "react";

import { Grid, Container, Box, Button, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import Image from "next/image";
import { useGetFeaturedBlogsQuery } from "@/app/redux/services/blogs";

const FeaturedBlogSliderV2 = ({ blogs }: any) => {
  const { data: featuredBlogs, isLoading } = useGetFeaturedBlogsQuery(null);

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
    const { image, heading, subHeading } = props;
    return (
      <Box
        sx={{
          // border: "1px solid red",
          width: "100%",
          height: "450px",
          backgroundImage: `url(${image})`,
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
            {heading}
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
            {subHeading}
          </Typography>
        </Box>
      </Box>
    );
  }

  if (isLoading) {
    return <h4>Loading</h4>;
  }
  return (
    <Grid item md={12}>
      <Carousel>
        {Array.isArray(featuredBlogs.data) &&
          featuredBlogs?.data?.map((item: any, index: any) => {
            console.log(item);
            return (
              <Item
                key={index}
                heading={item?.attributes?.title}
                subHeading={item?.attributes?.shortDescription}
                image={`${process.env.NEXT_PUBLIC_STRAPI_BASE_ASSET_URL}${item?.attributes?.featuredCoverImage?.data?.attributes?.formats?.large?.url}`}
              />
            );
          })}
      </Carousel>
    </Grid>
  );
};

export default FeaturedBlogSliderV2;
