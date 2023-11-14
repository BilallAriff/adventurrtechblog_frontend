"use client";
import React from "react";
import { Box, Typography, Tooltip } from "@mui/material";
import moment from "moment";

const Card = (props: any) => {
  const { title, shortDescription, image, tags } = props;

  const TypographyText = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
  };

  return (
    <Box
      className={"card"}
      sx={{
        // border: "1px solid red",
        boxShadow: "0px 3px 14px -8px rgba(0,0,0,0.24)",
        borderRadius: "4px",
        width: "100%",
        overflow: "hidden",
        cursor: "pointer",
        "&:hover": {
          boxShadow: "0px 4px 18px -8px rgba(0,0,0,0.50)",
          transition: "0.5s",
        },
      }}
    >
      <Box>
        <img width={"100%"} src={`${image}`} alt={`${title}`} />
      </Box>
      <Box sx={{ paddingY: 1, paddingX: 1.5 }}>
        <Tooltip title={title}>
          <Typography
            my={1.5}
            sx={{
              fontWeight: "bold",
              fontSize: 18,
              ...TypographyText,
            }}
          >
            {title}
          </Typography>
        </Tooltip>
        <Tooltip title={shortDescription}>
          <Typography mb={1.5} sx={{ fontSize: 14, ...TypographyText }}>
            {shortDescription}
          </Typography>
        </Tooltip>
      </Box>
      {/* <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          paddingY: 1,
          paddingX: 1,
        }}
      >
        {Array.isArray(tags) &&
          tags.map((tag, index) => {
            return (
              <Box
                key={index}
                sx={{
                  border: "4px",
                  margin: 0.5,
                  fontSize: 12,
                  backgroundColor: "lightgray",
                  width: "fit-content",
                  padding: "2px 10px",
                  borderRadius: "4px",
                  color: "white",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "#000722",
                    transition: "0.3s",
                  },
                }}
              >
                {tag}
              </Box>
            );
          })}
      </Box> */}
      <Box
        sx={{
          borderTop: "1px solid lightgray",
          display: "flex",
          justifyContent: "space-between",
          mt: 1.5,
          paddingY: 1,
          paddingX: 1.5,
        }}
      >
        <Typography sx={{ fontSize: 14 }}>{`${moment().format(
          "L"
        )}`}</Typography>
        <Typography
          sx={{
            cursor: "pointer",
            fontSize: 14,
            fontWeight: "bold",
            "&:hover": {
              color: "blue",
              transition: "0.3s",
            },
          }}
          component={"span"}
        >
          Read Now
        </Typography>
      </Box>
    </Box>
  );
};

export default Card;
