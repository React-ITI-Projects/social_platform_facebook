// src/components/MainContent/Stories.js
import { Box, Avatar, Typography } from "@mui/material";

const stories = [
  { name: "Rohit Sharma", image: "/src/assets/images/story2.jpg" },
  { name: "Surya Kumar", image: "/src/assets/images/story3.webp" },
  { name: "Rishab Pant", image: "/src/assets/images/story4.jpg" },
  { name: "MS Dhoni", image: "/src/assets/images/story5.jpg" },
];

export default function Stories() {
  return (
    <Box display="flex" gap={1.5} sx={{ overflowX: "auto" }}>
      {stories.map((story, index) => (
        <Box
          key={index}
          sx={{
            minWidth: 110,
            height: 180,
            bgcolor: "#1e1e1f",
            borderRadius: 3,
            position: "relative",
            overflow: "hidden",
            cursor: "pointer",
          }}
        >
          <Avatar
            src={story.image}
            sx={{
              width: 38,
              height: 38,
              position: "absolute",
              top: 8,
              left: 8,
              border: "2px solid #1877f2",
            }}
          />
          <Box
            component="img"
            src={story.image}
            alt={story.name}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.7,
            }}
          />
          <Typography
            variant="caption"
            sx={{
              position: "absolute",
              bottom: 8,
              left: 8,
              color: "white",
              fontWeight: 500,
            }}
          >
            {story.name}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
