"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import BusinessLogo from "../BusinessLogo/BusinessLogo";
import { styled } from "@mui/material";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const navItems = ["Home", "About", "Contact"];
const drawerWidth = 240;

export default function MainNavigationV2(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const NavList = styled("ul")({
    // border: "1px solid red",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  });
  const NavListItem = styled("li")({
    // border: "1px solid red",
    cursor: "pointer",
    marginLeft: 5,
    marginRight: 5,
  });
  const NavListText = styled("span")({
    color: "#00000075",
    ":hover": {
      borderBottom: "5px solid yellow",
    },
  });

  const SocialIcon = styled("span")({
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

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        sx={{ backgroundColor: "#FFFF", borderBottom: "1px solid #f1f1f1" }}
        elevation={0}
        component="nav"
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <BusinessLogo />
            </Box>
            <Box>
              <NavList>
                <NavListItem>
                  <NavListText>Design</NavListText>
                </NavListItem>
                <NavListItem>
                  <NavListText>Food</NavListText>
                </NavListItem>
                <NavListItem>
                  <NavListText>Pop culture</NavListText>
                </NavListItem>
                <NavListItem>
                  <NavListText>DIY classes</NavListText>
                </NavListItem>
              </NavList>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <NavList>
              <NavListItem>
                <SocialIcon
                  sx={{
                    fontSize: 18,
                    color: "#1877F2",
                    borderColor: "#1877F2",
                  }}
                >
                  <FacebookIcon />
                </SocialIcon>
              </NavListItem>
              <NavListItem>
                {" "}
                <SocialIcon
                  sx={{
                    fontSize: 18,
                    color: "#fbad50",
                    borderColor: "#fbad50",
                  }}
                >
                  <InstagramIcon />
                </SocialIcon>
              </NavListItem>
              <NavListItem>
                <SocialIcon
                  sx={{
                    fontSize: 18,
                    color: "#0077b5",
                    borderColor: "#0077b5",
                  }}
                >
                  <LinkedInIcon />
                </SocialIcon>
              </NavListItem>
              <NavListItem>
                {" "}
                <SocialIcon
                  sx={{
                    fontSize: 18,
                    color: "#CD201F",
                    borderColor: "#CD201F",
                  }}
                >
                  <YouTubeIcon />
                </SocialIcon>
              </NavListItem>
              <NavListItem>
                {" "}
                <SocialIcon
                  sx={{
                    fontSize: 18,
                    color: "#1DA1F2",
                    borderColor: "#1DA1F2",
                  }}
                >
                  <TwitterIcon />
                </SocialIcon>
              </NavListItem>
              <NavListItem>
                <SocialIcon
                  sx={{
                    fontSize: 18,
                    color: "#DAF7A6",
                    borderColor: "#DAF7A6",
                  }}
                >
                  <MailOutlineIcon />
                </SocialIcon>
              </NavListItem>
            </NavList>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
