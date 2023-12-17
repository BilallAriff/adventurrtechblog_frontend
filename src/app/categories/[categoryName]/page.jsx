import React from "react";
import { Grid, Container } from "@mui/material";
import CardV2 from "@/app/components/Card/CardV2";
import { blogs } from "@/dummyData";
import CardV3 from "@/app/components/Card/CardV3";

const Page = () => {
  return (
    // <Grid container>
    <Grid mb={10} item md={12}>
      <Container>
        <Grid container>
          {blogs.map((blog, index) => {
            return (
              <Grid padding={1} key={index} md={3}>
                <CardV3
                  thumbnail={`${process.env.NEXT_PUBLIC_STRAPI_BASE_ASSET_URL}${blog?.attributes?.thumbnail?.data?.attributes?.formats?.thumbnail?.url}`}
                  title={blog?.attributes?.title}
                  shortDescription={blog?.attributes?.shortDescription}
                  datePosted={blog?.attributes?.datePosted}
                  subCategories={blog?.attributes?.sub_categories?.data}
                  slug={blog?.attributes?.slug}
                />
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
