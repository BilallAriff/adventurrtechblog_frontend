"use client";
import {
  Box,
  Button,
  Typography,
  Grid,
  Container,
  CircularProgress,
} from "@mui/material";
import styles from "./page.module.css";
import Switch from "@mui/material/Switch";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/store";
import { decrement, increment } from "./redux/features/counter/counterSlice";
import FeaturedBlogSlider from "./components/FeaturedBlogSlider/FeaturedBlogSlider";
import Card from "./components/Card/Card";
import { useGetBlogsQuery } from "./redux/services/blogs";
import { useGetCategoriesQuery } from "./redux/services/categories";
import GlobalLoadingUI from "./components/GlobalLoadingUI/GobalLoadingUI";
// import { decrement, increment } from "./counterSlice";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Home() {
  // const count = useSelector((state: RootState) => state.counter.value);
  // const dispatch = useDispatch();

  const { isLoading, error, data } = useGetBlogsQuery(null);
  const { isLoading: isLoadingCategories } = useGetCategoriesQuery(null);

  if (isLoading || isLoadingCategories) {
    return <GlobalLoadingUI />;
  }

  return (
    <>
      <Grid item md={12}>
        <FeaturedBlogSlider blogs={data?.data} />
      </Grid>
      <Grid item md={12}>
        <Typography
          my={2}
          textAlign={"center"}
          variant="h4"
          fontWeight={"bold"}
        >
          Latest Blogs
        </Typography>
      </Grid>
      <Grid md={12}>
        <Container>
          <Grid container spacing={3}>
            {data?.data?.map((blog, index) => {
              console.log(blog);
              return (
                <Grid key={index} item md={3}>
                  <Card
                    title={blog?.attributes?.title}
                    shortDescription={blog?.attributes?.shortDescription}
                    image={`${process.env.NEXT_PUBLIC_STRAPI_BASE_ASSET_URL}${blog?.attributes?.coverImage?.data?.attributes?.formats?.large.url}`}
                    slug={blog?.attributes?.slug}
                    tags={blog?.attributes?.tags}
                    datePosted={blog?.attributes?.datePosted}
                  />
                </Grid>
              );
            })}
            {/* {blogs.map((blog, index) => {
              return (
                <Grid key={index} item md={3}>
                  <Card
                    title={blog?.title}
                    shortDescription={blog?.shortDescription}
                    image={blog?.image}
                    slug={blog?.slug}
                    tags={blog?.tags}
                  />
                </Grid>
              );
            })} */}
          </Grid>
        </Container>
      </Grid>
    </>
  );
}

const blogs = [
  {
    title: "How MetaVerse will change the world we see today",
    shortDescription:
      "learn everything you need to know about the modern emerging technology MetaVerse by Facebook and how it impacts our day to day life",
    image: "/images/blog/blog-1.jpg",
    slug: "How_MetaVerse_will_change_the_world_we_see_today_123123123",
    tags: [
      "Object Oriented Programming",
      "Lifestyle",
      "Programming Lifestyle",
      "Programming",
    ],
  },
  {
    title: "How MetaVerse will change the world we see today",
    shortDescription:
      "learn everything you need to know about the modern emerging technology MetaVerse by Facebook and how it impacts our day to day life",
    image: "/images/blog/blog-2.jpg",
    slug: "How_MetaVerse_will_change_the_world_we_see_today_123123123",
    tags: [
      "Object Oriented Programming",
      "Lifestyle",
      "Programming Lifestyle",
      "Programming",
    ],
  },
  {
    title: "How MetaVerse will change the world we see today",
    shortDescription:
      "learn everything you need to know about the modern emerging technology MetaVerse by Facebook and how it impacts our day to day life",
    image: "/images/blog/blog-1.jpg",
    slug: "How_MetaVerse_will_change_the_world_we_see_today_123123123",
    tags: [
      "Object Oriented Programming",
      "Lifestyle",
      "Programming Lifestyle",
      "Programming",
    ],
  },
  {
    title: "How MetaVerse will change the world we see today",
    shortDescription:
      "learn everything you need to know about the modern emerging technology MetaVerse by Facebook and how it impacts our day to day life",
    image: "/images/blog/blog-3.jpg",
    slug: "How_MetaVerse_will_change_the_world_we_see_today_123123123",
    tags: [
      "Object Oriented Programming",
      "Lifestyle",
      "Programming Lifestyle",
      "Programming",
    ],
  },
  {
    title: "How MetaVerse will change the world we see today",
    shortDescription:
      "learn everything you need to know about the modern emerging technology MetaVerse by Facebook and how it impacts our day to day life",
    image: "/images/blog/blog-4.jpg",
    slug: "How_MetaVerse_will_change_the_world_we_see_today_123123123",
    tags: [
      "Object Oriented Programming",
      "Lifestyle",
      "Programming Lifestyle",
      "Programming",
    ],
  },
  {
    title: "How MetaVerse will change the world we see today",
    shortDescription:
      "learn everything you need to know about the modern emerging technology MetaVerse by Facebook and how it impacts our day to day life",
    image: "/images/blog/blog-1.jpg",
    slug: "How_MetaVerse_will_change_the_world_we_see_today_123123123",
    tags: [
      "Object Oriented Programming",
      "Lifestyle",
      "Programming Lifestyle",
      "Programming",
    ],
  },
  {
    title: "How MetaVerse will change the world we see today",
    shortDescription:
      "learn everything you need to know about the modern emerging technology MetaVerse by Facebook and how it impacts our day to day life",
    image: "/images/blog/blog-1.jpg",
    slug: "How_MetaVerse_will_change_the_world_we_see_today_123123123",
    tags: [
      "Object Oriented Programming",
      "Lifestyle",
      "Programming Lifestyle",
      "Programming",
    ],
  },
  {
    title: "How MetaVerse will change the world we see today",
    shortDescription:
      "learn everything you need to know about the modern emerging technology MetaVerse by Facebook and how it impacts our day to day life",
    image: "/images/blog/blog-2.jpg",
    slug: "How_MetaVerse_will_change_the_world_we_see_today_123123123",
    tags: [
      "Object Oriented Programming",
      "Lifestyle",
      "Programming Lifestyle",
      "Programming",
    ],
  },
  {
    title: "How MetaVerse will change the world we see today",
    shortDescription:
      "learn everything you need to know about the modern emerging technology MetaVerse by Facebook and how it impacts our day to day life",
    image: "/images/blog/blog-3.jpg",
    slug: "How_MetaVerse_will_change_the_world_we_see_today_123123123",
    tags: [
      "Object Oriented Programming",
      "Lifestyle",
      "Programming Lifestyle",
      "Programming",
    ],
  },
];
