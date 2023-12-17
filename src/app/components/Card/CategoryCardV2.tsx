"use client";
import { Box, Chip, Typography, styled, Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import UserProfileAvatar from "../UserProfileAvatar/UserProfileAvatar";
import Link from "next/link";
import { useRouter } from "next/navigation";

const CategoryCardV2 = (props: any) => {
  const { categoryImage, categoryName, slug } = props;
  const router = useRouter();

  const Card = styled(Box)({
    width: "100%",
    maxHeight: 150,
    position: "relative",
    overflow: "hidden",
    transition: "0.2s",
    "&:hover": {
      "::before": {
        backgroundColor: "rgba(0, 0, 0, 1)", // Darken the background on hover
      },
      cursor: "pointer", // Change cursor to pointer on hover
    },
    "::before": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "flex",
      color: "#FFFFFF",
      fontSize: 18,
      flexDirection: "column",
      justifyContent: "flex-end",
      paddingLeft: 15,
      paddingBottom: 18,
      content: `'${categoryName}'`,
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      zIndex: 999999,
    },
  });
  const CardHeader = styled(Box)({
    overflow: "hidden",
  });
  const CardBody = styled(Box)({});
  const CardText = styled(Link)({
    textAlign: "center",
    fontSize: 15,
    marginTop: 3,
    color: "#000000b5",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
      textDecorationColor: "yellow",
      textDecorationThickness: "2px",
    },
  });

  return (
    <Card onClick={() => router.push(`/categories/${slug}`)}>
      <CardHeader
        sx={{
          position: "relative",
          "&:hover": {
            "& .overlay": {
              opacity: 1,
            },
          },
        }}
      >
        <img width={"100%"} src={categoryImage} />
        <Box
          className="overlay"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.9)", // Adjust the overlay color and opacity
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0, // Initially hidden
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          <Button variant="contained" color="primary">
            Read More
          </Button>
        </Box>
      </CardHeader>
      {/* <CardBody>
        <CardText href={`/categories/${slug}`}>{categoryName}</CardText>
      </CardBody> */}
    </Card>
  );
};

export default CategoryCardV2;
