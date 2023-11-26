import { Box } from "@mui/material";
import React from "react";

const layout = (props) => {
  const { children } = props;
  return <Box>{children}</Box>;
};

export default layout;
