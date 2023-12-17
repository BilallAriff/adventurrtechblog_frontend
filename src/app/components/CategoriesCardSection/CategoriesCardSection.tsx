"use client";
import { Box, Button, Grid } from "@mui/material";
import React from "react";
import CategoryCardV2 from "../Card/CategoryCardV2";
import { useGetCategoriesQuery } from "@/app/redux/services/categories";

const categories = [
  {
    name: "Artificial Inteligence",
    description: "",
    image: "images/categories/artificial-inteligence.jpg",
  },
  {
    name: "Block Chain",
    description: "",
    image: "images/categories/block-chain.jpg",
  },
  {
    name: "Books",
    description: "",
    image: "images/categories/books.jpg",
  },
  {
    name: "Gaming",
    description: "",
    image: "images/categories/gaming.jpg",
  },
  {
    name: "Metaverse",
    description: "",
    image: "images/categories/metaverse.jpg",
  },
  {
    name: "React",
    description: "",
    image: "images/categories/react.jpg",
  },
];

const CategoriesCardSection = () => {
  const { data, isLoading, isError } = useGetCategoriesQuery(null);

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      {data?.data?.map((category: any, index: any) => {
        return (
          <CategoryCardV2
            slug={category?.attributes?.slug}
            key={index}
            categoryName={category?.attributes?.name}
            categoryImage={`${process.env.NEXT_PUBLIC_STRAPI_BASE_ASSET_URL}${category?.attributes?.thumbnail?.data?.attributes?.formats?.thumbnail?.url}`}
          />
        );
      })}
    </Box>
  );
};

export default CategoriesCardSection;
