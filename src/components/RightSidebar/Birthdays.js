import { Box, Typography, Avatar } from "@mui/material";

export default function Birthdays() {
  return (
    <Box
      sx={{
        bgcolor: "#1e1e1f",
        borderRadius: 3,
        p: 2,
      }}
    >
      <Typography fontSize={14} fontWeight={600} color="gray" sx={{ mb: 2 }}>
        Birthdays
      </Typography>

      <Typography fontSize={14}>
        🎂 Anushka and 2 others have birthdays today.
      </Typography>
    </Box>
  );
}
