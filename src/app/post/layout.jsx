import { Grid } from "@mui/material";
import React from "react";
import SimilarBlogs from "../components/SimilarBlogs/SimilarBlogs";

const layout = ({ children }) => {
  return (
    <Grid md={12} container>
      <Grid padding={1} item md={3}>
        social links
      </Grid>
      <Grid padding={1} item md={6}>
        {children}
      </Grid>
      <Grid padding={1} item md={3}>
        <SimilarBlogs />
      </Grid>
    </Grid>
  );
};

export default layout;
