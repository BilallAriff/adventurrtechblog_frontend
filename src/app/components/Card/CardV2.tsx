import { Box, Chip, Typography, styled } from "@mui/material";
import Image from "next/image";
import React from "react";
import UserProfileAvatar from "../UserProfileAvatar/UserProfileAvatar";

const CardV2 = () => {
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
        <img width={"100%"} src={"/images/featured_blogs/netflix.jpg"} />
      </CardHeader>
      <CardBody>
        <Chip sx={{ marginY: 1 }} label={"Technology"} />
        {/* <CardCategories>Technology</CardCategories> */}
        <CardText>
          Read the case study of netflix and how it emerge as the leader in
          streaming
        </CardText>
      </CardBody>
      <CardFooter mt={2}>
        <UserProfileAvatar />
      </CardFooter>
    </Card>
  );
};

export default CardV2;
