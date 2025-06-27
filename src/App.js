import { Box } from "@mui/material";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/MainContent/MainContent";
import RightSidebar from "./components/RightSidebar/RightSidebar";
import CustomAppBar from "./components/AppBar";

function App() {
  return (
    <Box
      sx={{
        bgcolor: "#0f0f10",
        minHeight: "100vh",
        m: 0,
        p: 0,
        overflowX: "hidden",
      }}
    >
      <CustomAppBar />
      <Box display="flex">
        <Sidebar />
        <Box flex={2}>
          <MainContent />
        </Box>
        <Box flex={1}>
          <RightSidebar />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
