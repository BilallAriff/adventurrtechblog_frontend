"use client";
import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  useGetCategoriesQuery,
  useGetAllDataByCategorySlugQuery,
} from "../redux/services/categories";
import { useGetSubCategoriesQuery } from "../redux/services/subCategories";
import { useGetFeaturedBlogsQuery } from "../redux/services/blogs";
import { useGetSocialContactsQuery } from "../redux/services/socialContacts";
import { useGetAboutMeQuery } from "../redux/services/aboutMe";

const EndPoints = () => {
  const dispatch = useDispatch();
  const { data: categories } = useGetCategoriesQuery(null);
  const { data: subCategories } = useGetSubCategoriesQuery(null);
  const { data: categoryBySlug } = useGetAllDataByCategorySlugQuery({
    slug: "artificial_inteligence",
  });
  const { data: allDataByCategory } = useGetAllDataByCategorySlugQuery({
    slug: "artificial_inteligence",
  });
  const { data: featuredBlogs } = useGetFeaturedBlogsQuery(null);
  const { data: socialContacts } = useGetSocialContactsQuery(null);
  const { data: aboutMe } = useGetAboutMeQuery(null);
  return (
    <Box
      marginTop={20}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <Box>
        <Button
          variant={"contained"}
          onClick={() => console.log({ categories })}
        >
          Categories
        </Button>
        <Button
          variant={"contained"}
          onClick={() => console.log({ subCategories })}
        >
          Sub Categories
        </Button>
        <Button
          variant={"contained"}
          onClick={() => console.log({ categoryBySlug })}
        >
          Category by slug
        </Button>
        <Button
          variant={"contained"}
          onClick={() => console.log({ allDataByCategory })}
        >
          allDataByCategory
        </Button>
        <Button
          variant={"contained"}
          onClick={() => console.log({ featuredBlogs })}
        >
          Featured blogs
        </Button>
        <Button
          variant={"contained"}
          onClick={() => console.log({ socialContacts })}
        >
          social contacts
        </Button>
        <Button variant={"contained"} onClick={() => console.log({ aboutMe })}>
          About me
        </Button>
      </Box>
    </Box>
  );
};

export default EndPoints;
