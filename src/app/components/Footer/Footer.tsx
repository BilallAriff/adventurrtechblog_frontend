"use client";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MUILink,
} from "@mui/material";
import React from "react";
import BusinessLogo from "../BusinessLogo/BusinessLogo";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  return (
    <Grid container md={12}>
      <Grid md={12}>
        <Container>
          <Box
            sx={{
              borderTop: "1px solid lightgray",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                paddingY: 2.5,
                // width: "100%",
              }}
            >
              <BusinessLogo />
            </Box>
            <Box
              sx={{
                flexDirection: "column",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  cursor: "pointer",
                  transition: "0.2s",
                  fontSize: 18,
                  color: "#717171",
                  mb: 1,
                  "&:hover": { color: "#5a89a5" },
                }}
                onClick={() => router.push("/bilal_arif")}
                component={"span"}
              >
                Bilal Arif - Founder
              </Typography>
              <Typography
                sx={{
                  cursor: "pointer",
                  transition: "0.2s",
                  fontSize: 18,
                  color: "#717171",
                  mb: 1,
                  "&:hover": { color: "#5a89a5" },
                }}
                onClick={() => router.push("/bilal_arif")}
                component={"span"}
              >
                Services
              </Typography>
              <Typography
                sx={{
                  cursor: "pointer",
                  transition: "0.2s",
                  fontSize: 18,
                  color: "#717171",
                  mb: 1,
                  "&:hover": { color: "#5a89a5" },
                }}
                onClick={() => router.push("/bilal_arif")}
                component={"span"}
              >
                Team
              </Typography>
              <Typography
                sx={{
                  cursor: "pointer",
                  transition: "0.2s",
                  fontSize: 18,
                  color: "#717171",
                  mb: 1,
                  "&:hover": { color: "#5a89a5" },
                }}
                onClick={() => router.push("/bilal_arif")}
                component={"span"}
              >
                Contact
              </Typography>
            </Box>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Footer;
