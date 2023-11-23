import { styled } from "@mui/material";
import React from "react";

const NavList = (props: any) => {
  const { children } = props;

  const Nav_List = styled("ul")({
    listStyle: "none",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  });

  return <Nav_List>{children}</Nav_List>;
};

export default NavList;
