import { Box, Container, Grid2 } from "@mui/material";
import React, { useState } from "react";
import { PostList } from "../components/PostList";
import Sidebar from "../components/SideBar";
import Suggestions from "../components/Suggestions";

export const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #fef9c3 0%, #fed7aa 100%)",
        minHeight: "100vh",
        paddingTop: "80px",
        paddingBottom: "40px",
      }}
    >
      <Container maxWidth="xl">
        <Grid2 container spacing={3}>
          <Grid2 size={{ xs: 12, md: 3 }}>
            <Sidebar onSearch={handleSearch} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <PostList />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 3 }}>
            <Suggestions searchQuery={searchQuery} />
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};