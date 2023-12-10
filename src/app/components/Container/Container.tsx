import React from "react";
import { Box } from "@mui/material";

const Container = ({ children }: any) => {
  return <Box sx={{ paddingX: 10 }}>{children}</Box>;
};

export default Container;
