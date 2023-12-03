"use client";
import React from "react";
import { Box, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useGetCategoriesQuery } from "../redux/services/categories";
import { useGetSubCategoriesQuery } from "../redux/services/subCategories";

const EndPoints = () => {
  const dispatch = useDispatch();
  const { data: categories } = useGetCategoriesQuery(null);
  const { data: subCategories } = useGetSubCategoriesQuery(null);

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
      </Box>
    </Box>
  );
};

export default EndPoints;
