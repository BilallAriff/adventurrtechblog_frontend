"use client";

import { useGetCategoriesQuery } from "@/app/redux/services/categories";
import { Box, Container, LinearProgress, Typography } from "@mui/material";
import React from "react";

const MainNavigation = () => {
  const ListItem = (props: any) => {
    return <Typography>{props.children}</Typography>;
  };

  const { isLoading, isFetching, data, error } = useGetCategoriesQuery(null);

  if (isLoading) {
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    );
  }

  return (
    <>
      <Container>
        <Box className={"flex-left main-navigation"}>
          {data?.data.map((item, index) => {
            return <ListItem key={index}>{item?.attributes?.name}</ListItem>;
          })}
        </Box>
        {/* <Box className={"flex-left main-navigation"}>
          {categories.map((item, index) => {
            return <ListItem key={index}>{item}</ListItem>;
          })}
        </Box> */}
      </Container>
    </>
  );
};

export default MainNavigation;

const categories = [
  "Tech News",
  "Books",
  "Life",
  "Programming",
  "Adventurr Tech",
];
