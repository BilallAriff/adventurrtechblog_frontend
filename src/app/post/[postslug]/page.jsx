"use client";
import GlobalLoadingUI from "@/app/components/GlobalLoadingUI/GobalLoadingUI";
import PostHeading from "@/app/components/PostHeading/PostHeading";
import { useGetBlogBySlugQuery } from "@/app/redux/services/blogs";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";
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
      <Grid item md={12} mt={12}>
        <PostHeading
          heading={params?.postslug}
          image="/images/featured_blogs/cropped-metaverse.jpg"
        />
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
