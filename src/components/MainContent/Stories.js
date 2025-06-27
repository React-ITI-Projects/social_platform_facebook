import React from "react";
import { Box, Paper, Avatar, Typography } from "@mui/material";

const stories = [
  { name: "Create Story", img: "/src/assets/images/avatar.avif" },
  { name: "Rohit Sharma", img: "/src/assets/images/story2.jpg" },
  { name: "Surya Kumar", img: "/src/assets/images/story3.webp" },
  { name: "Rishabh Pant", img: "/src/assets/images/story4.jpg" },
];

function Stories() {
  return (
    <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
      {stories.map((story, index) => (
        <Paper key={index} sx={{ p: 1, textAlign: "center", width: 80 }}>
          <Avatar src={story.img} sx={{ width: 60, height: 60, mx: "auto" }} />
          <Typography variant="caption">{story.name}</Typography>
        </Paper>
      ))}
    </Box>
  );
}

export default Stories;
