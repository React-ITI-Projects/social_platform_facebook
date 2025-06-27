// src/components/Sidebar/Sidebar.js
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Typography,
} from "@mui/material";
import {
  Home,
  Groups,
  Storefront,
  OndemandVideo,
  History,
  ExpandMore,
} from "@mui/icons-material";

const menuItems = [
  { icon: <Home />, label: "Home" },
  { icon: <Groups />, label: "Groups" },
  { icon: <Storefront />, label: "Marketplace" },
  { icon: <OndemandVideo />, label: "Watch" },
  { icon: <History />, label: "Most Recent" },
  { icon: <ExpandMore />, label: "See More" },
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
          src="/src/assets/images/avatar.avif"
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
    </Box>
  );
}
