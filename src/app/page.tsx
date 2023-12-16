"use client";
import {
  Box,
  Button,
  Typography,
  Grid,
  Container,
  CircularProgress,
  Avatar,
} from "@mui/material";
import styles from "./page.module.css";
import Switch from "@mui/material/Switch";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/store";
import { decrement, increment } from "./redux/features/counter/counterSlice";
import FeaturedBlogSlider from "./components/FeaturedBlogSlider/FeaturedBlogSlider";
import Card from "./components/Card/Card";
import TextField from "@mui/material/TextField";
import { useGetBlogsQuery } from "./redux/services/blogs";
import { useGetCategoriesQuery } from "./redux/services/categories";
import GlobalLoadingUI from "./components/GlobalLoadingUI/GobalLoadingUI";
import FeaturedBlogSliderV2 from "./components/FeaturedBlogSliderV2/FeaturedBlogSliderV2";
import CardV2 from "./components/Card/CardV2";
import BusinessLogo from "./components/BusinessLogo/BusinessLogo";
import CategoriesCardSection from "./components/CategoriesCardSection/CategoriesCardSection";
import Footer from "./components/Footer/Footer";
import FooterV2 from "./components/Footer/FooterV2";
import { Nunito_Sans } from "next/font/google";
import FeaturedBlogSliderV3 from "./components/FeaturedBlogSliderV3/FeaturedBlogSliderV3";
import SectionHeading from "./components/SectionHeading/SectionHeading";
import CardV3 from "./components/Card/CardV3";
import AboutMeSection from "./components/AboutMeSection/AboutMeSection";
// import { decrement, increment } from "./counterSlice";
const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Home({ children }: any) {
  // const count = useSelector((state: RootState) => state.counter.value);
  // const dispatch = useDispatch();

  const {
    isLoading: blogsLoading,
    error,
    data: blogs,
  } = useGetBlogsQuery(null);
  const { isLoading: isLoadingCategories } = useGetCategoriesQuery(null);

  if (blogsLoading || isLoadingCategories) {
    return <GlobalLoadingUI />;
  }

  return (
    <Grid mt={10} container>
      <Grid md={12} mt={4}>
        <FeaturedBlogSliderV3 />
      </Grid>
      <Grid item my={2} md={12}>
        <SectionHeading text={"Latest This Week"} />
      </Grid>
      <Grid mb={10} item md={12}>
        <Container>
          <Grid container>
            {blogs?.data.map((blog, index) => {
              console.log("blogs", blog?.attributes?.sub_categories);
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
            })}
          </Grid>
        </Container>
      </Grid>
      <Grid item md={12}>
        <AboutMeSection />
      </Grid>
      {/* <Grid item md={12} mb={50}></Grid> */}
    </Grid>
  );
}
