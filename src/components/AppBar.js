// src/components/AppBar.js
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Avatar,
  InputBase,
  Badge,
} from "@mui/material";
import {
  Home,
  Storefront,
  Groups,
  OndemandVideo,
  Notifications,
  Message,
  Search,
  Apps,
  ArrowDropDown,
} from "@mui/icons-material";

export default function CustomAppBar() {
  return (
    <AppBar
      position="sticky"
      sx={{ bgcolor: "#0f0f10", boxShadow: "none", px: 2 }}
    >
      <Toolbar sx={{ justifyContent: "space-between", minHeight: "70px" }}>
        {/* Left Section */}
        <Box display="flex" alignItems="center" gap={2}>
          <Avatar
            src="/src/assets/images/avatar.avif"
            alt="logo"
            sx={{ width: 40, height: 40, cursor: "pointer" }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "#1e1e1f",
              px: 1.5,
              py: 0.5,
              borderRadius: 5,
              width: 200,
            }}
          >
            <Search sx={{ color: "gray", fontSize: 20 }} />
            <InputBase
              placeholder="Search Here"
              sx={{ ml: 1, color: "white", fontSize: 14 }}
            />
          </Box>
        </Box>

        {/* Center Section */}
        <Box display="flex" alignItems="center" gap={4}>
          <IconButton
            sx={{ borderBottom: "2px solid #1877f2", borderRadius: 0 }}
          >
            <Home sx={{ color: "white", fontSize: 30 }} />
          </IconButton>
          <IconButton>
            <OndemandVideo sx={{ color: "gray", fontSize: 28 }} />
          </IconButton>
          <IconButton>
            <Storefront sx={{ color: "gray", fontSize: 28 }} />
          </IconButton>
          <IconButton>
            <Groups sx={{ color: "gray", fontSize: 28 }} />
          </IconButton>
        </Box>

        {/* Right Section */}
        <Box display="flex" alignItems="center" gap={2}>
          <IconButton>
            <Apps sx={{ color: "white", fontSize: 24 }} />
          </IconButton>
          <IconButton>
            <Badge badgeContent={3} color="error">
              <Message sx={{ color: "white", fontSize: 24 }} />
            </Badge>
          </IconButton>
          <IconButton>
            <Badge badgeContent={5} color="error">
              <Notifications sx={{ color: "white", fontSize: 24 }} />
            </Badge>
          </IconButton>
          <Box
            display="flex"
            alignItems="center"
            gap={1}
            sx={{ cursor: "pointer" }}
          >
            <Avatar
              src="/src/assets/images/avatar.avif"
              sx={{ width: 32, height: 32 }}
            />
            <ArrowDropDown sx={{ color: "white" }} />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
