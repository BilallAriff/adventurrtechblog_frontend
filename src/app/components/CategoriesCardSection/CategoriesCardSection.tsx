import { Grid } from "@mui/material";
import React from "react";
import CategoryCard from "../Card/CategoryCard";

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
  return (
    <Grid container>
      {categories.map((category, index) => {
        return (
          <Grid padding={1} md={2} key={index}>
            <CategoryCard
              key={index}
              categoryName={category?.name}
              categoryImage={category?.image}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CategoriesCardSection;
