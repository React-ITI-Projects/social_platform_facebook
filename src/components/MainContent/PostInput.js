import { Avatar, Box, TextField, IconButton, Typography } from "@mui/material";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import LiveTvIcon from "@mui/icons-material/LiveTv";

export default function PostInput() {
  return (
    <Box bgcolor="#1e1e1f" p={2} borderRadius={3} color="white" sx={{ my: 2 }}>
      <Box display="flex" alignItems="center" gap={2}>
        <Avatar src="/assets/images/avatar.avif" />
        <TextField
          fullWidth
          placeholder="What's on your mind, Eric?"
          variant="outlined"
          sx={{
            input: { color: "white", fontSize: 14 },
            "& .MuiOutlinedInput-root": {
              borderRadius: 15,
              bgcolor: "#2e2e2f",
              "& fieldset": { border: "none" },
            },
          }}
        />
      </Box>

      {/* Footer Icons */}
      <Box
        display="flex"
        justifyContent="space-around"
        mt={2}
        sx={{
          bgcolor: "#232425",
          borderRadius: 2,
          py: 1,
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          gap={1}
          sx={{ cursor: "pointer" }}
        >
          <LiveTvIcon sx={{ color: "white", fontSize: 20 }} />
          <Typography fontSize={13} color="gray">
            Live Video
          </Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          gap={1}
          sx={{ cursor: "pointer" }}
        >
          <PhotoLibraryIcon sx={{ color: "white", fontSize: 20 }} />
          <Typography fontSize={13} color="gray">
            Photo/Video
          </Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          gap={1}
          sx={{ cursor: "pointer" }}
        >
          <TagFacesIcon sx={{ color: "white", fontSize: 20 }} />
          <Typography fontSize={13} color="gray">
            Feeling/Activity
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
