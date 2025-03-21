import React from "react";
import { Box, Typography, Avatar, List, ListItem, ListItemAvatar, ListItemText, Link, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Sidebar() {
  const contacts = [
    { name: "Diogo Forlan", username: "@forlan77", avatar: "https://via.placeholder.com/40" },
    { name: "Jane Smith", username: "@jane123", avatar: "https://via.placeholder.com/40" },
    { name: "John Doe2", username: "@john_doe", avatar: "https://via.placeholder.com/40" },
    { name: "John Doe3", username: "@john_doe", avatar: "https://via.placeholder.com/40" },
    { name: "John Doe4", username: "@john_doe", avatar: "https://via.placeholder.com/40" },

  ];

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        padding: "16px",
        width: "100%",
        maxWidth: "360px",
        display: "flex",
        flexDirection: "column",
        marginBottom: '150px',
      }}
    >
      {/* Thanh tìm kiếm */}
      <TextField
        placeholder="Tìm kiếm"
        variant="outlined"
        size="small"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          style: {
            backgroundColor: "#f4f4f4",
            borderRadius: "8px",
          }
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": { border: "none" },
          },
        }}
      />

      {/* Tạo khoảng cách 30px */}
      <Box sx={{ height: "30px" }} />

      {/* Danh sách người liên hệ gần đây */}
      <Box sx={{}}>
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "8px", marginTop: '20px', color: 'rgba(0, 0, 0, 0.6)' }}>
          Người liên hệ gần đây
        </Typography>
        <List>
          {contacts.map((contact, index) => (
            <ListItem key={index} sx={{ padding: "8px 0" }}>
              <ListItemAvatar>
                <Avatar alt={contact.name} src={contact.avatar} />
              </ListItemAvatar>
              <ListItemText sx={{ color: 'rgba(0, 0, 0, 0.6)' }}
                primary={contact.name}
                secondary={contact.username}
              />
            </ListItem>
          ))}
        </List>
        <Box textAlign="center" sx={{ marginTop: "8px" }}>
          <Link href="#" sx={{ color: "green", fontWeight: "bold" }}>
            Xem thêm
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Sidebar;