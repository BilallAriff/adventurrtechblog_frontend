import { Box, Chip, Typography, styled } from "@mui/material";
import Image from "next/image";
import React from "react";
import UserProfileAvatar from "../UserProfileAvatar/UserProfileAvatar";

const CategoryCard = (props: any) => {
  const { categoryImage, categoryName } = props;
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
  const CardText = styled(Typography)({
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
    <Card>
      <CardHeader>
        <img width={"100%"} src={categoryImage} />
      </CardHeader>
      <CardBody>
        <CardText>{categoryName}</CardText>
      </CardBody>
    </Card>
  );
};

export default CategoryCard;
