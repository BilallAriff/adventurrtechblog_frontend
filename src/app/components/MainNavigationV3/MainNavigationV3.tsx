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
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";
import { useGetCategoriesQuery } from "@/app/redux/services/categories";
import SocialContacts from "../SocialContacts/SocialContacts";
import { useRouter } from "next/navigation";
import Link from "next/link";
import BrandingNavigation from "../BrandingNavigation/BrandingNavigation";
import Container from "../Container/Container";

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

  const NavList = styled(Box)({
    display: "flex",
    justifyContent: "flex-start",
    width: "100%",
  });
  const NavListItem = styled(Box)({
    width: "fit-content",
    cursor: "pointer",
    marginLeft: 5,
    marginRight: 5,
  });
  const NavListText = styled("span")({
    color: "#000000",
    fontSize: 14,
    ":hover": {
      borderBottom: "2px solid #000000",
    },
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
          sx={{
            backgroundColor: "#FFFF",
            borderBottom: "1px solid #f1f1f1",
            paddingX: 0,
          }}
          elevation={0}
          component="nav"
        >
          <BrandingNavigation />
          <Box sx={{ paddingY: 1.5, backgroundColor: "#F9FBF2" }}>
            <Container>
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
            </Container>
          </Box>
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
