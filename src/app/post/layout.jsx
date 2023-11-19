import { Grid } from "@mui/material";
import React from "react";

const layout = ({ children }) => {
  return (
    <Grid container spacing={2}>
      <Grid item md={3}>
        social links
      </Grid>
      <Grid item md={6}>
        {children}
      </Grid>
      <Grid item md={3}>
        similar blogs
      </Grid>
    </Grid>
  );
};

export default layout;
