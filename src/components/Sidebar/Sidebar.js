import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Typography,
  Divider,
} from "@mui/material";
import {
  Storefront,
  History,
  Groups,
  OndemandVideo,
  ExpandMore,
} from "@mui/icons-material";
import GroupIcon from "@mui/icons-material/Group";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

const menuItems = [
  { icon: <GroupIcon />, label: "Friends" },
  { icon: <Storefront />, label: "Marketplace" },
  { icon: <History />, label: "Most Recent" },
  { icon: <Groups />, label: "Groups" },
  { icon: <OndemandVideo />, label: "Watch" },
  { icon: <ExpandMore />, label: "See More" },
];

const shortcuts = [
  { icon: <EmojiEventsIcon />, label: "Tournaments" },
  { icon: <SportsSoccerIcon />, label: "Football League" },
];

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: 280,
        p: 2,
        bgcolor: "#0f0f10",
        color: "white",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {/* Profile Section */}
      <Box display="flex" alignItems="center" gap={2}>
        <Avatar
          src="/assets/images/avatar.avif"
          sx={{ width: 40, height: 40 }}
        />
        <Typography fontWeight={600} fontSize={15}>
          Virat Kohli
        </Typography>
      </Box>

      {/* Menu Items */}
      <List sx={{ mt: 1 }}>
        {menuItems.map((item, index) => (
          <ListItemButton
            key={index}
            sx={{
              borderRadius: 2,
              px: 2,
              py: 1,
              color: "white",
              "&:hover": {
                bgcolor: "#1e1e1f",
              },
            }}
          >
            <ListItemIcon sx={{ color: "white", minWidth: 36 }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{ fontSize: 14 }}
            />
          </ListItemButton>
        ))}
      </List>

      <Divider sx={{ borderColor: "#2e2e2f", my: 0.5 }} />

      {/* Shortcuts Section */}
      <Typography
        fontSize={13}
        fontWeight={500}
        color="gray"
        sx={{ px: 2, mb: 0.2 }}
      >
        Your Shortcuts
      </Typography>
      <List>
        {shortcuts.map((item, index) => (
          <ListItemButton
            key={index}
            sx={{
              borderRadius: 2,
              px: 2,
              pb: 1,
              color: "white",
              "&:hover": {
                bgcolor: "#1e1e1f",
              },
            }}
          >
            <ListItemIcon sx={{ color: "white", minWidth: 36 }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{ fontSize: 14 }}
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}
