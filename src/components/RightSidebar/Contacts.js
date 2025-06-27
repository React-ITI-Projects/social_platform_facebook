import {
  Avatar,
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
  Link,
  Badge,
} from "@mui/material";
import { VideoCall, Search, MoreHoriz } from "@mui/icons-material";

const contacts = [
  { name: "Anushka Sharma", image: "/assets/images/avatar.avif" },
  { name: "MS Dhoni", image: "/assets/images/avatar.avif" },
  { name: "Smriti Mandhana", image: "/assets/images/avatar.avif" },
  { name: "Anushka Sharma", image: "/assets/images/avatar.avif" },
  { name: "MS Dhoni", image: "/assets/images/avatar.avif" },
];

export default function Contacts() {
  return (
    <Box
      sx={{
        bgcolor: "#1e1e1f",
        borderRadius: 3,
        p: 2,
        height: "100%",
        overflowY: "auto",
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={1}
      >
        <Typography fontSize={14} fontWeight={600} color="gray">
          Contacts
        </Typography>
        <Box display="flex" gap={1}>
          <IconButton size="small">
            <VideoCall sx={{ color: "white", fontSize: 18 }} />
          </IconButton>
          <IconButton size="small">
            <Search sx={{ color: "white", fontSize: 18 }} />
          </IconButton>
          <IconButton size="small">
            <MoreHoriz sx={{ color: "white", fontSize: 18 }} />
          </IconButton>
        </Box>
      </Box>
      <List>
        {contacts.map((contact, index) => (
          <ListItem key={index} sx={{ px: 0 }}>
            <ListItemAvatar>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
                sx={{
                  "& .MuiBadge-dot": {
                    backgroundColor: "#44b700",
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    border: "2px solid white",
                  },
                }}
              >
                <Avatar src={contact.image} />
              </Badge>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Link href="#" underline="hover" color="inherit" fontSize={14}>
                  {contact.name}
                </Link>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
