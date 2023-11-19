import { Box } from "@mui/material";
import React from "react";
import Card from "../Card/Card";
import CompactCard from "../CompactCard";

const SimilarBlogs = () => {
  for (let i = 0; i < 3; i++) {
    return (
      <Box className={"flex-column-all-center"}>
        {blogs.slice(0, 3).map((blog, index) => {
          return (
            <CompactCard
              key={index}
              title={blog?.title}
              shortDescription={blog?.shortDescription}
              image={`${blog?.image}`}
              slug={blog?.slug}
              tags={blog?.tags}
              datePosted={""}
              //     key={index}
              //   title={blog?.attributes?.title}
              //   shortDescription={blog?.attributes?.shortDescription}
              //   image={`${process.env.NEXT_PUBLIC_STRAPI_BASE_ASSET_URL}${blog?.attributes?.coverImage?.data?.attributes?.formats?.large.url}`}
              //   slug={blog?.attributes?.slug}
              //   tags={blog?.attributes?.tags}
              //   datePosted={blog?.attributes?.datePosted}
            />
          );
        })}
      </Box>
    );
  }
};

export default SimilarBlogs;

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
