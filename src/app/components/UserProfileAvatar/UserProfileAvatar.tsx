import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

const UserProfileAvatar = (props: any) => {
  const { size } = props;

  return (
    <Box
      sx={{ display: "flex", justifyContent: "start", alignItems: "center" }}
    >
      <Avatar
        sx={{ height: 30, width: 30 }}
        src="images/users/bilal_arif.jpg"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          sx={{
            fontSize: 14,
            m: 0,
            p: 0,
            marginLeft: 0.5,
            color: "##000000cf",
          }}
        >
          Bilal Arif
        </Typography>
        {/* <Typography
          sx={{ fontSize: 12, marginTop: 0, paddingTop: 0, marginLeft: 0.5 }}
        >
          Founder
        </Typography> */}
      </Box>
    </Box>
  );
};

export default UserProfileAvatar;
