import React from "react";
import { Grid, Container } from "@mui/material";
import CardV2 from "@/app/components/Card/CardV2";
import { blogs } from "@/dummyData";

const Page = () => {
  return (
    // <Grid container>
    <Grid mb={10} item md={12}>
      <Container>
        <Grid container>
          {blogs.map((blog, index) => {
            return (
              <Grid padding={1} key={index} md={3}>
                <CardV2 />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Grid>
    // </Grid>
  );
};

export default Page;
