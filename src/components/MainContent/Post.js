import React from "react";
import { Paper, Typography, Avatar, Box } from "@mui/material";

function Post({ title, content, image }) {
  return (
    <Paper sx={{ p: 2, mt: 2 }}>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body2" paragraph>
        {content}
      </Typography>
      {image && <Avatar src={image} sx={{ width: 200, height: 200, mt: 1 }} />}
    </Paper>
  );
}

export default Post;
