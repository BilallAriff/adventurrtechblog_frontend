import React from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const BusinessLogoV2 = () => {
  const router = useRouter();

  return (
    <Box
      component={"span"}
      onClick={() => router.push("/")}
      sx={{ cursor: "pointer" }}
    >
      <Typography>Adventurr.tech</Typography>
    </Box>
  );
};

export default BusinessLogoV2;
