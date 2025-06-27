import React from "react";
import { Drawer, List } from "@mui/material";
import SidebarItem from "./SidebarItem";
import { Avatar } from "@mui/material";
import {
  Home as HomeIcon,
  Search as SearchIcon,
  Store as StoreIcon,
  Group as GroupIcon,
  PlayCircleFilled as PlayIcon,
} from "@mui/icons-material";

const sidebarItems = [
  {
    text: "Virat Kohli",
    icon: <Avatar src="/src/assets/images/avatar.avif" />,
  },
  { text: "Friends", icon: <GroupIcon /> },
  { text: "Marketplace", icon: <StoreIcon /> },
  { text: "Most Recent", icon: <SearchIcon /> },
  { text: "Groups", icon: <GroupIcon /> },
  { text: "Watch", icon: <PlayIcon /> },
  { text: "RCB Fanclub", icon: <Avatar /> },
  { text: "Test Championship", icon: <Avatar /> },
];

function Sidebar() {
  const handleItemClick = (text) => {
    console.log(`Clicked on ${text}`);
  };

  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        {sidebarItems.map((item, index) => (
          <SidebarItem
            key={index}
            icon={item.icon}
            text={item.text}
            onClick={() => handleItemClick(item.text)}
          />
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;
