import { styled } from "@mui/material";
import React from "react";

const NavListText = (props: any) => {
  const { children } = props;

  const Nav_ListText = styled("span")({
    color: "#00000075",
    ":hover": {
      borderBottom: "5px solid yellow",
    },
  });

  return <Nav_ListText>{children}</Nav_ListText>;
};

export default NavListText;
