import { Box, Button, Typography, Grid, Container } from "@mui/material";
import styles from "./page.module.css";
import Switch from "@mui/material/Switch";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/store";
import { decrement, increment } from "./redux/features/counter/counterSlice";
import FeaturedBlogSlider from "./components/FeaturedBlogSlider/FeaturedBlogSlider";
import Card from "./components/Card/Card";
// import { decrement, increment } from "./counterSlice";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Home() {
  // const count = useSelector((state: RootState) => state.counter.value);
  // const dispatch = useDispatch();

  return (
    <>
      <Grid item md={12}>
        <FeaturedBlogSlider />
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
            {blogs.map((blog, index) => {
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
            })}
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
