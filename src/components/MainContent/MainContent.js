import React from "react";
import { Paper } from "@mui/material";
import Stories from "./Stories";
import PostInput from "./PostInput";
import Post from "./Post";

function MainContent() {
  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Stories />
      <PostInput />
      <Post
        title="Indian Cricket Team"
        content="India has been touring Australia since 1947, but all that changed after winning the first and third Tests in Adelaide and Melbourne, respectively."
        image="/src/assets/images/team.jpg"
      />
    </Paper>
  );
}

export default MainContent;
