// src/components/MainContent/PostInput.js
import { Avatar, Box, TextField } from "@mui/material";

export default function PostInput() {
  return (
    <Box
      sx={{
        bgcolor: "#1e1e1f",
        p: 2,
        borderRadius: 3,
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Avatar
        src="/src/assets/images/avatar.avif"
        sx={{ width: 40, height: 40 }}
      />
      <TextField
        placeholder="What's on your mind, Eric?"
        fullWidth
        variant="outlined"
        sx={{
          bgcolor: "#2e2e2f",
          borderRadius: 5,
          input: { color: "white" },
          "& fieldset": { border: "none" },
        }}
      />
    </Box>
  );
}
