// src/components/RightSidebar/Birthdays.js
import { Box, Typography, Avatar } from "@mui/material";

export default function Birthdays() {
  return (
    <Box
      sx={{
        bgcolor: "#1e1e1f",
        borderRadius: 3,
        p: 2,
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Avatar
        src="/src/assets/images/avatar.avif"
        sx={{ width: 36, height: 36 }}
      />
      <Typography fontSize={14}>
        🎂 Anushka and 2 others have birthdays today.
      </Typography>
    </Box>
  );
}
