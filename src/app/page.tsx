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
      <Grid md={12}>
        <FeaturedBlogSliderV2 />
      </Grid>
      <Grid item md={12}>
        <Typography my={2} fontWeight={600} fontSize={32} textAlign={"center"}>
          Latest This Week
        </Typography>
      </Grid>
      <Grid mb={10} item md={12}>
        <Container>
          <Grid container>
            {blogs?.data.map((blog, index) => {
              console.log("blogs", blog?.attributes?.sub_categories);
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
            })}
          </Grid>
        </Container>
      </Grid>
      <Grid item md={12}>
        <Box>
          <Box
            sx={{
              backgroundColor: "#e4e4e6",
              display: "flex",
              // border: "1px solid red",
            }}
          >
            <Box
              sx={{
                width: "50%",
                padding: 8,
                paddingRight: 2,
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                // border: "1px solid green",
              }}
            >
              <Avatar
                sx={{ width: 350, height: 350 }}
                src={"images/users/bilal_arif.jpg"}
              />
            </Box>
            <Box
              sx={{
                // border: "1px solid purple",
                width: "50%",
                // height: "100%",
                display: "flex",
                // flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                padding: 8,
                paddingLeft: 2,
              }}
            >
              <Box>
                <Typography
                  sx={{ fontWeight: 600, fontSize: 32, color: "#000722" }}
                >
                  Bilal Arif
                </Typography>
                <Typography
                  sx={{ fontWeight: 400, fontSize: 18, color: "##000000bd" }}
                >
                  Im Senior Software Engineer, Enterperneur and Founder of
                  Adventurr.tech a full-fledge Softare Development and Design
                  Agency, learn More about us{" "}
                </Typography>
                <Button sx={{ marginTop: 2 }} variant={"contained"}>
                  About Us
                </Button>
                {/* <TextField
                  sx={{ backgroundColor: "#FFFFF" }}
                  fullWidth
                  placeholder="yourmeail@mail.com"
                  size="small"
                  variant="outlined"
                /> */}
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
      {/* <Grid item md={12} mb={50}></Grid> */}
    </Grid>
  );
}

const blogsDummy = [
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

// return (
//   <Grid container>
//     <Grid item md={12}>
//       <FeaturedBlogSlider blogs={data?.data} />
//     </Grid>
//     <Grid item md={12}>
//       <Typography
//         my={2}
//         textAlign={"center"}
//         variant="h4"
//         fontWeight={"bold"}
//       >
//         Latest Blogs
//       </Typography>
//     </Grid>
//     <Grid md={12}>
//       <Container>
//         <Grid container spacing={3}>
//           {data?.data?.map((blog, index) => {
//             console.log(blog);
//             return (
//               <Grid key={index} item md={3}>
//                 <Card
//                   title={blog?.attributes?.title}
//                   shortDescription={blog?.attributes?.shortDescription}
//                   image={`${process.env.NEXT_PUBLIC_STRAPI_BASE_ASSET_URL}${blog?.attributes?.coverImage?.data?.attributes?.formats?.large.url}`}
//                   slug={blog?.attributes?.slug}
//                   tags={blog?.attributes?.tags}
//                   datePosted={blog?.attributes?.datePosted}
//                 />
//               </Grid>
//             );
//           })}
//           {/* {blogs.map((blog, index) => {
//             return (
//               <Grid key={index} item md={3}>
//                 <Card
//                   title={blog?.title}
//                   shortDescription={blog?.shortDescription}
//                   image={blog?.image}
//                   slug={blog?.slug}
//                   tags={blog?.tags}
//                 />
//               </Grid>
//             );
//           })} */}
//         </Grid>
//       </Container>
//     </Grid>
//   </Grid>
// );
