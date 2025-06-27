import React from "react";
import AppBar from "./components/AppBar";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/MainContent/MainContent";
import RightSidebar from "./components/RightSidebar/RightSidebar";
import { Container, Grid } from "@mui/material";

function App() {
  return (
    <div>
      <AppBar />
      <Container>
        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid item xs={2}>
            <Sidebar />
          </Grid>
          <Grid item xs={7}>
            <MainContent />
          </Grid>
          <Grid item xs={3}>
            <RightSidebar />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
