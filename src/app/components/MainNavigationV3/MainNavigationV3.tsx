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
import { useGetCategoriesQuery } from "@/app/redux/services/categories";
import SocialContacts from "../SocialContacts/SocialContacts";
import { useRouter } from "next/navigation";
import Link from "next/link";
import BrandingNavigation from "../BrandingNavigation/BrandingNavigation";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const navItems = ["Home", "About", "Contact"];
const drawerWidth = 240;

export default function MainNavigationV3(props: Props) {
  const { window } = props;
  const router = useRouter();
  const { data: categories, isLoading, isError } = useGetCategoriesQuery(null);

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
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          sx={{ backgroundColor: "#FFFF", borderBottom: "1px solid #f1f1f1" }}
          elevation={0}
          component="nav"
        >
          {/* <Container> */}
          <BrandingNavigation />
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
                  {categories?.data?.map((cat: any, index: number) => {
                    return (
                      <>
                        {" "}
                        <NavListItem>
                          <NavListText>
                            <Link href={`/categories/${cat?.attributes?.slug}`}>
                              {cat?.attributes?.name}
                            </Link>
                          </NavListText>
                        </NavListItem>
                      </>
                    );
                  })}
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
              <SocialContacts />
            </Box>
          </Toolbar>
          {/* </Container>   */}
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
    </>
  );
}
