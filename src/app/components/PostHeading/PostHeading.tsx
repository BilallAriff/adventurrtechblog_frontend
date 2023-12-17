import { Box } from "@mui/material";
import React, { ReactPropTypes } from "react";
import BackdropHeading from "../BackdropHeading/BackdropHeading";

interface PostHeadingType {
  heading?: string;
  subHeading?: string;
  image?: string;
}

const PostHeading = (props: PostHeadingType) => {
  const { heading, subHeading, image } = props;

  return (
    <Box
      sx={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "450px",
      }}
      className={"flex-all-center"}
    >
      <BackdropHeading>{heading}</BackdropHeading>
    </Box>
  );
};

export default PostHeading;
