"use client";

import BackdropHeading from "@/app/components/BackdropHeading/BackdropHeading";
import NavList from "@/app/components/NavigationList/NavList";
import NavListItem from "@/app/components/NavigationList/NavListItem";
import NavListText from "@/app/components/NavigationList/NavListText";
import { Box, Grid, Container, Button } from "@mui/material";
import { useParams } from "next/navigation";
import React from "react";
import {
  useGetCategoriesQuery,
  useGetAllDataByCategorySlugQuery,
} from "../../redux/services/categories";
import CardV2 from "@/app/components/Card/CardV2";

const Layout = (props) => {
  const { children } = props;
  const params = useParams();
  const categoryName = params?.categoryName;
  const {
    data: allDataByCategory,
    isLoading,
    isError,
  } = useGetAllDataByCategorySlugQuery({
    slug: categoryName,
  });

  if (isLoading) {
    <h1 style={{ marginTop: 100 }}>Loading . . . . </h1>;
  }

  return (
    <Grid container>
      <Grid item md={12}>
        <Button
          onClick={() =>
            console.log({ allDataByCategory, categoryData, categoryName })
          }
        >
          Data
        </Button>
        <Box
          sx={{
            backgroundImage: `url(${process.env.NEXT_PUBLIC_STRAPI_BASE_ASSET_URL}${allDataByCategory?.data?.[0]?.attributes?.coverImage?.data?.attributes?.formats?.large?.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "350px",
          }}
          className={"flex-all-center"}
        >
          <BackdropHeading>
            {allDataByCategory?.data?.[0]?.attributes?.name}
          </BackdropHeading>
        </Box>
      </Grid>
      <Grid item md={12}>
        <Container>
          <Box className="flex-all-center">
            <Box my={5} width={"fit-content"}>
              <NavList>
                {allDataByCategory?.data?.[0]?.attributes?.sub_categories?.data.map(
                  (subCategory, index) => {
                    console.log("su categories =>", subCategory);
                    return (
                      <NavListItem key={index}>
                        <NavListText>
                          {subCategory?.attributes?.name}
                        </NavListText>
                      </NavListItem>
                    );
                  }
                )}
              </NavList>
            </Box>
          </Box>
        </Container>
      </Grid>
      <Grid item md={12}>
        {
          <Container>
            <Grid container>
              {allDataByCategory?.data?.[0]?.attributes?.blogs?.data.map(
                (blog, index) => {
                  return (
                    <Grid padding={1} key={index} md={3}>
                      <CardV2
                        thumbnail={`${process.env.NEXT_PUBLIC_STRAPI_BASE_ASSET_URL}${blog?.attributes?.thumbnail?.data?.attributes?.formats?.thumbnail?.url}`}
                        title={blog?.attributes?.title}
                        shortDescription={blog?.attributes?.shortDescription}
                        datePosted={blog?.attributes?.datePosted}
                        subCategories={blog?.attributes?.sub_categories?.data}
                        slug={blog?.attributes?.slug}
                      />
                    </Grid>
                  );
                }
              )}
            </Grid>
          </Container>
        }
      </Grid>
    </Grid>
  );
};

export default Layout;

const subCategories = [
  "Technology",
  "Science",
  "Engineering",
  "Metavers",
  "Trends",
  "Gadgets",
];
