import { Box } from "@mui/material";
import Stories from "./Stories";
import PostInput from "./PostInput";
import Post from "./Post";

export default function MainContent() {
  return (
    <Box px={3} py={2} display="flex" flexDirection="column" gap={2}>
      <Stories />
      <PostInput />
      <Post />
    </Box>
  );
}
