"use client";
import React from "react";
import { Grid, Container, Box, Button, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import Image from "next/image";
import { useGetFeaturedBlogsQuery } from "@/app/redux/services/blogs";

const FeaturedBlogSliderV3 = ({ blogs }: any) => {
  const { data: featuredBlogs, isLoading } = useGetFeaturedBlogsQuery(null);

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
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            // pointerEvents: "none",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <Box sx={{ paddingX: 7, paddingBottom: 7, paddingRight: "40%" }}>
            <Typography
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
              }}
              fontWeight={400}
              fontSize={46}
              color={"#FFFFFF"}
            >
              {heading}
            </Typography>
            <Typography
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
              }}
              fontWeight={100}
              fontSize={18}
              my={2}
              color={"#FFFFFF"}
            >
              {subHeading}
            </Typography>
            <Button variant="contained">Read Now</Button>
          </Box>
        </Box>
      </Box>
    );
  }

  if (isLoading) {
    return <h4>Loading</h4>;
  }
  return (
    <Grid item md={12}>
      <Container>
        <Carousel>
          {Array.isArray(featuredBlogs.data) &&
            featuredBlogs?.data?.map((item: any, index: any) => {
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
      </Container>
    </Grid>
  );
};

export default FeaturedBlogSliderV3;
