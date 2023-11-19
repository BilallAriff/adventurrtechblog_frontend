"use client";
import React from "react";
import { Box, Typography, Tooltip } from "@mui/material";
import moment from "moment";
import { useRouter } from "next/navigation";

const CompactCard = (props: any) => {
  const { title, shortDescription, image, tags, slug, datePosted } = props;

  const router = useRouter();

  const TypographyText = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
  };

  return (
    <Box>
      <Box sx={{ width: 5, backgroundColor: "lightgray" }} />
      <Box>
        <Typography>{title}</Typography>
        <Typography>{shortDescription}</Typography>
        <Typography component={"span"}>Read Now</Typography>
      </Box>
    </Box>
  );
};

export default CompactCard;
