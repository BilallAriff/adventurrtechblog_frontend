"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import { useRouter } from "next/navigation";

const BusinessLogo = (props: any) => {
  const { disableRedirection } = props;
  const router = useRouter();
  return (
    <Box
      component={"span"}
      sx={{
        cursor: "pointer",
      }}
      onClick={() => router.push("/")}
      className="flex-start Logo"
    >
      <Box sx={{ marginRight: 0.5 }}>
        <ChangeHistoryIcon sx={{ fontSize: 35 }} />
      </Box>
      <Typography sx={{ fontWeight: 600, fontSize: 22 }}>
        Adventurr Tech
        {/* | Bilal Arif */}
      </Typography>
    </Box>
  );
};

export default BusinessLogo;
