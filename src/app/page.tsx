import styles from "./page.module.css";
import { Box, Typography } from "@mui/material";
const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Home() {
  return (
    <Box className={styles.container}>
      <Typography variant={"h1"}>Adventurr Tech Blog</Typography>
    </Box>
  );
}
