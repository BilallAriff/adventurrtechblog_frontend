"use client";
import Container from "@/app/components/Container/Container";
import GlobalLoadingUI from "@/app/components/GlobalLoadingUI/GobalLoadingUI";
import HeaderComponent from "@/app/components/HeaderComponent/HeaderComponent";
import PostHeading from "@/app/components/PostHeading/PostHeading";
import { useGetBlogBySlugQuery } from "@/app/redux/services/blogs";
import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import Markdown from "react-markdown";

const BlogPost = () => {
  const params = useParams();

  const { data, isLoading, error } = useGetBlogBySlugQuery(params?.postslug);

  if (isLoading) {
    return (
      <>
        <GlobalLoadingUI />
      </>
    );
  }

  return (
    <Grid container>
      <Grid item md={12} mt={15}>
        <Container>
          <HeaderComponent
            heading={data?.data?.[0]?.attributes?.title}
            subHeading={data?.data?.[0]?.attributes?.shortDescription}
            image={`${process.env.NEXT_PUBLIC_STRAPI_BASE_ASSET_URL}${data?.data?.[0]?.attributes?.featuredCoverImage?.data?.attributes?.formats?.large?.url}`}
          />
        </Container>
      </Grid>
      {/* <Grid md={12}>
        <Box>
          <img
            width={"100%"}
            src={`${process.env.NEXT_PUBLIC_STRAPI_BASE_ASSET_URL}${data?.data?.[0]?.attributes?.thumbnail?.data?.attributes?.formats?.large?.url}`}
          />
        </Box>
      </Grid> */}
      <Grid md={12}>
        <Typography textAlign={"center"} my={3} variant="h3">
          {data?.data?.[0]?.attributes?.title}
        </Typography>
      </Grid>
      {/* <button
        onClick={() =>
          console.log({
            params,
            data,
            blog: data?.data?.[0]?.attributes?.blogBody,
          })
        }
      >
        ddd
      </button> */}
      {/* {`${params.postslug}`} */}
      <Grid item md={3}></Grid>
      <Grid item md={6}>
        <Markdown>{data?.data?.[0]?.attributes?.blogBody}</Markdown>
      </Grid>
      <Grid item md={3}></Grid>
    </Grid>
  );
};

export default BlogPost;
