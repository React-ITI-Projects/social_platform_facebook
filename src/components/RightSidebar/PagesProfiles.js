import { Box, Typography, Avatar } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";

export default function PagesProfiles() {
  return (
    <Box
      sx={{
        bgcolor: "#1e1e1f",
        borderRadius: 3,
        p: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {/* Header */}
      <Typography fontSize={14} fontWeight={600} color="gray">
        Your Pages and profiles
      </Typography>

      {/* Profile Section */}
      <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
        <Box position="relative" display="inline-block">
          <Avatar
            src="/assets/images/avatar.avif"
            sx={{ width: 56, height: 56 }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: -2,
              right: "25%",
              transform: "translateX(50%)",
              bgcolor: "#d32f2f",
              color: "white",
              fontSize: 10,
              px: 1,
              py: "2px",
              borderRadius: 8,
              whiteSpace: "nowrap",
            }}
          >
            4
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <Typography fontSize={14} fontWeight={500}>
            ICC Officials
          </Typography>
          <Box display="flex" alignItems="center" gap={0.5}>
            <Typography fontSize={12} color="gray">
              Professional dashboard
            </Typography>
          </Box>
        </Box>
        <Box sx={{ pr: 5 }}>
          <WorkIcon sx={{ fontSize: 30, color: "gray" }} />
        </Box>
      </Box>
    </Box>
  );
}
