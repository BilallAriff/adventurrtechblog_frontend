import { Grid } from "@mui/material";
import React from "react";
import SimilarBlogs from "../components/SimilarBlogs/SimilarBlogs";
import PostHeading from "../components/PostHeading/PostHeading";

const layout = ({ children }) => {
  return (
    <Grid container md={12}>
      {children}
    </Grid>
  );
};

export default layout;
