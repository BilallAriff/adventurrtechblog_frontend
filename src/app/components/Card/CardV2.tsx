"use client";
import { Box, Chip, Typography, styled } from "@mui/material";
import Image from "next/image";
import React from "react";
import UserProfileAvatar from "../UserProfileAvatar/UserProfileAvatar";
import { useRouter } from "next/navigation";

const CardV2 = (props: any) => {
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
    color: "#000000b5",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
      textDecorationColor: "yellow",
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
      <CardHeader>
        <img width={"100%"} src={thumbnail} />
      </CardHeader>
      <CardBody>
        {subCategories?.map((subCat: any, index: any) => {
          return (
            <Chip
              key={index}
              sx={{ marginY: 1 }}
              label={subCat?.attributes?.name}
            />
          );
        })}
        {/* <CardCategories>Technology</CardCategories> */}
        <CardText onClick={() => router.push(`/post/${slug}`)}>
          {title}
        </CardText>
      </CardBody>
      <CardFooter mt={2}>
        <UserProfileAvatar />
      </CardFooter>
    </Card>
  );
};

export default CardV2;
