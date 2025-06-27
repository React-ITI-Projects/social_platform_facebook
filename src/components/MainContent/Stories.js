import { Box, Avatar, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const stories = [
  { name: "Your Story", image: "/src/assets/images/avatar.avif", isAdd: true },
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
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            pb: 1.5,
          }}
        >
          <Box
            component="img"
            src={story.image}
            alt={story.name}
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.7,
            }}
          />

          {story.isAdd ? (
            <>
              <Box
                sx={{
                  position: "relative",
                  alignSelf: "center",
                  width: 30,
                  height: 30,
                  borderRadius: "50%",
                  bgcolor: "#1877f2",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  my: 1,
                }}
              >
                <AddIcon sx={{ color: "white", fontSize: 20 }} />
              </Box>
              <Typography
                variant="caption"
                sx={{
                  position: "relative",
                  zIndex: 1,
                  color: "white",
                  fontWeight: 500,
                  px: 1,
                  textAlign: "center",
                }}
              >
                Create story
              </Typography>
            </>
          ) : (
            <>
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
              <Typography
                variant="caption"
                sx={{
                  position: "relative",
                  zIndex: 1,
                  color: "white",
                  fontWeight: 500,
                  px: 1,
                }}
              >
                {story.name}
              </Typography>
            </>
          )}
        </Box>
      ))}
    </Box>
  );
}
