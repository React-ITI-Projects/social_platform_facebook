// src/components/RightSidebar/RightSidebar.js
import { Box } from "@mui/material";
import Birthdays from "./Birthdays";
import Contacts from "./Contacts";
import PagesProfiles from "./PagesProfiles";

export default function RightSidebar() {
  return (
    <Box
      p={2}
      sx={{
        color: "white",
        bgcolor: "#0f0f10",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        height: "100vh",
      }}
    >
      <PagesProfiles />
      <Birthdays />
      <Contacts />
    </Box>
  );
}
