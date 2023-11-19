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
    <Box
      sx={{
        borderLeft: "5px solid #e7e6e7",
        paddingLeft: 1,
        display: "flex",
        flexDirection: "row",
        marginBottom: 2.5,
      }}
    >
      <Box>
        <Typography
          sx={{ fontSize: 14, mb: 1, fontWeight: 600, ...TypographyText }}
        >
          {title}
        </Typography>
        <Typography sx={{ fontSize: 13, fontWeight: 400, ...TypographyText }}>
          {shortDescription}
        </Typography>
        <Typography
          sx={{
            width: "100%",
            fontSize: 12,
            textAlign: "right",
            fontWeight: 600,
            color: "blue",
            cursor: "pointer",
          }}
          component={"span"}
        >
          Read Now
        </Typography>
      </Box>
    </Box>
  );
};

export default CompactCard;
