import React from "react";
import { Box, Typography, Button } from "@mui/material";
import {
  VideoCall as VideoIcon,
  Photo as PhotoIcon,
  Mood as MoodIcon,
} from "@mui/icons-material";

function PostInput() {
  return (
    <Box sx={{ p: 2, bgcolor: "background.paper", borderRadius: 1, mb: 2 }}>
      <Typography variant="h6">What's on your mind, Eric?</Typography>
      <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
        <Button variant="outlined" startIcon={<VideoIcon />}>
          Live Video
        </Button>
        <Button variant="outlined" startIcon={<PhotoIcon />}>
          Photo/Video
        </Button>
        <Button variant="outlined" startIcon={<MoodIcon />}>
          Feeling/Activity
        </Button>
      </Box>
    </Box>
  );
}

export default PostInput;
