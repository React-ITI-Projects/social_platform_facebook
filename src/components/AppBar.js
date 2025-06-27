import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

function AppBarComponent() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Facebook Clone</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default AppBarComponent;
