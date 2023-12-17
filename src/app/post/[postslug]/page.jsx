"use client";
import Container from "@/app/components/Container/Container";
import GlobalLoadingUI from "@/app/components/GlobalLoadingUI/GobalLoadingUI";
import HeaderComponent from "@/app/components/HeaderComponent/HeaderComponent";
import PostHeading from "@/app/components/PostHeading/PostHeading";
import SectionHeading from "@/app/components/SectionHeading/SectionHeading";
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
      <Grid md={12}>
        <Container>
          <Box my={13}>
            <SectionHeading text={data?.data?.[0]?.attributes?.title} />
          </Box>
        </Container>
      </Grid>
      <Grid item md={3}></Grid>
      <Grid item md={6}>
        <Box className="blog-post-section">
          <Markdown>{data?.data?.[0]?.attributes?.blogBody}</Markdown>
        </Box>
      </Grid>
      <Grid item md={3}></Grid>
    </Grid>
  );
};

export default BlogPost;
