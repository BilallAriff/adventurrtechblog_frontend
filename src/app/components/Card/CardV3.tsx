"use client";
import { Box, Button, Chip, Typography, styled } from "@mui/material";
import Image from "next/image";
import React from "react";
import UserProfileAvatar from "../UserProfileAvatar/UserProfileAvatar";
import { useRouter } from "next/navigation";
import CategoryPill from "../Pills/CategoryPill";

const CardV3 = (props: any) => {
  const {
    slug,
    thumbnail,
    title,
    shortDescription,
    subCategories,
    datePosted,
  } = props;

  const router = useRouter();

  const Card = styled(Box)({
    width: "100%",
    border: "4px",
    overflow: "hidden",
  });
  const CardHeader = styled(Box)({
    overflow: "hidden",
    borderRadius: "4px",
  });
  const CardBody = styled(Box)({});
  const CardFooter = styled(Box)({});
  const CardText = styled(Typography)({
    fontSize: 15,
    marginTop: 3,
    color: "#000000",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
      textDecorationColor: "#000000",
      textDecorationThickness: "2px",
      // textDecorationStyle: "double",
      // textDecorationOffset: "50px",
    },
  });
  const CardHeading = styled(Typography)({});
  const CardSubHeading = styled(Typography)({});
  const CardCategories = styled(Typography)({
    color: "#00000075",
    marginTop: 2,
    marginBottom: 2,
    fontSize: 18,
    fontWeight: 400,
  });

  return (
    <Card>
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
        <img width={"100%"} src={thumbnail} />
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
      <CardBody>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
          {subCategories?.map((subCat: any, index: any) => {
            return <CategoryPill key={index} text={subCat?.attributes?.name} />;
          })}
          {/* <CardCategories>Technology</CardCategories> */}
        </Box>
        <CardText
          className="line-limit-2"
          onClick={() => router.push(`/post/${slug}`)}
        >
          {title}
        </CardText>
      </CardBody>
      {/* <CardFooter mt={2}>
        <UserProfileAvatar />
      </CardFooter> */}
    </Card>
  );
};

export default CardV3;
