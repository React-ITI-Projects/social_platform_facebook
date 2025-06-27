import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";

function SidebarItem({ icon, text, onClick }) {
  return (
    <ListItem button onClick={onClick} className="dark-bg">
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} className="light-text" />
    </ListItem>
  );
}

export default SidebarItem;
