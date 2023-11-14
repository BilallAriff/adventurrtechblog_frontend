import { Box, Typography } from "@mui/material";
import React from "react";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";

const BusinessLogo = () => {
  return (
    <Box className="flex-start Logo">
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
