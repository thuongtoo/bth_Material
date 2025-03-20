import { Avatar, Button, Box, Typography } from "@mui/material";
import React from "react";

export const CreatePost = () => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#16181C",
        borderRadius: "50px",
        marginTop: "20px",
        padding: "16px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Avatar
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="User Avatar"
          />
          <Typography variant="body1" color="#808080" fontWeight={"600"}>
            Bắt đầu nimbus...
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#6EC207",
            color: "#f5f5f5",
            borderRadius: "25px",
          }}
        >
          Đăng
        </Button>
      </Box>
    </Box>
  );
};
