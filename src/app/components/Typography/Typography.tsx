import React from "react";
import { Tooltip, Typography as MUITypography } from "@mui/material";

const Typography = (props: { text: string; tooltip?: boolean }) => {
  const { text, tooltip = false } = props;

  return (
    <Tooltip title={tooltip ? text : ""}>
      <MUITypography>{text}</MUITypography>
    </Tooltip>
  );
};

export default Typography;
