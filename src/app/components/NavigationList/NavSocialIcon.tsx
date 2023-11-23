import { styled } from "@mui/material";
import React from "react";

const NavSocialIcon = (props: any) => {
  const { children } = props;

  const Nav_SocialIcon = styled("span")({
    // border: "1px solid #000722",
    // height: 25,
    // width: 25,
    // color: "#000722",
    // borderRadius: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
  });

  return <Nav_SocialIcon {...props}>{children}</Nav_SocialIcon>;
};

export default NavSocialIcon;
