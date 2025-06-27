import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";

function SidebarItem({ icon, text, onClick }) {
  return (
    <ListItem button onClick={onClick}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
}

export default SidebarItem;
