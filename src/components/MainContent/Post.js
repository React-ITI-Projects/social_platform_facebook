import {
  Avatar,
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";

export default function Post() {
  return (
    <Card
      sx={{
        bgcolor: "#1e1e1f",
        color: "white",
        borderRadius: 3,
        overflow: "hidden",
      }}
    >
      <CardContent>
        <Box display="flex" alignItems="center" gap={2} mb={1}>
          <Avatar src="/src/assets/images/avatar.avif" />
          <Box>
            <Typography variant="subtitle2" fontWeight={600}>
              Indian Cricket Team
            </Typography>
            <Box display="flex" alignItems="center" gap={0.5}>
              <Typography variant="caption" color="gray">
                5h ago
              </Typography>
              <PublicIcon sx={{ fontSize: 14, color: "gray" }} />
            </Box>
          </Box>
        </Box>
        <Typography variant="body2" mb={2}>
          India has been touring Australia since 1947, but all that changed
          after winning the first and third Tests in Adelaide and Melbourne,
          respectively.
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="340"
        image="/src/assets/images/team.jpg"
        alt="Team Celebration"
        sx={{ objectFit: "cover" }}
      />
    </Card>
  );
}
