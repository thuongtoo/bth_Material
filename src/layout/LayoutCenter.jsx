import { Container, Box } from "@mui/material";
import React from "react";

export const LayoutCenter = ({ children }) => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      maxWidth="xl"
    >
      <Box
        maxWidth={"600px"}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {children ? children : <h1>Loading...</h1>}
      </Box>
    </Container>
  );
};
