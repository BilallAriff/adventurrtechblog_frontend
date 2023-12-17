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
import CardV3 from "@/app/components/Card/CardV3";
import CategoryPill from "@/app/components/Pills/CategoryPill";
import RoundActionPill from "@/app/components/Pills/RoundActionPill";
import HeaderComponent from "@/app/components/HeaderComponent/HeaderComponent";

const Layout = (props) => {
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
      <Grid item md={12} mt={15}>
        <Container>
          <HeaderComponent
            image={`${process.env.NEXT_PUBLIC_STRAPI_BASE_ASSET_URL}${allDataByCategory?.data?.[0]?.attributes?.coverImage?.data?.attributes?.formats?.large?.url}`}
            heading={allDataByCategory?.data?.[0]?.attributes?.name}
            subHeading={
              allDataByCategory?.data?.[0]?.attributes?.shortDescription
            }
          />
        </Container>
      </Grid>
      <Grid item md={12}>
        <Container>
          <Box
            sx={{
              my: 5,
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {allDataByCategory?.data?.[0]?.attributes?.sub_categories?.data.map(
              (subCategory, index) => {
                return (
                  <RoundActionPill
                    key={index}
                    text={subCategory?.attributes?.name}
                  />
                );
              }
            )}
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
                    <Grid padding={1} key={index} md={2}>
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
