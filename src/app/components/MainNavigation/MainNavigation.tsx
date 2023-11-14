import { Box, Container, Typography } from "@mui/material";
import React from "react";

const MainNavigation = () => {
  const ListItem = (props: any) => {
    return <Typography>{props.children}</Typography>;
  };

  return (
    <>
      <Container>
        <Box className={"flex-left main-navigation"}>
          {categories.map((item, index) => {
            return <ListItem key={index}>{item}</ListItem>;
          })}
        </Box>
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
