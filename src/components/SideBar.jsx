import React from "react";
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Link,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Sidebar({ onSearch }) {
  const contacts = [
    {
      name: "Diogo Forlan",
      username: "@forlan77",
      avatar: "https://via.placeholder.com/40",
    },
    {
      name: "Jane Smith",
      username: "@jane123",
      avatar: "https://via.placeholder.com/40",
    },
    {
      name: "John Doe2",
      username: "@john_doe",
      avatar: "https://via.placeholder.com/40",
    },
    {
      name: "John Doe3",
      username: "@john_doe",
      avatar: "https://via.placeholder.com/40",
    },
    {
      name: "John Doe4",
      username: "@john_doe",
      avatar: "https://via.placeholder.com/40",
    },
  ];

  const handleSearchChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "300px" },
        position: "sticky",
        top: "20px",
        alignSelf: "flex-start",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      {/* Thanh tìm kiếm */}
      <TextField
        placeholder="Tìm kiếm người dùng..."
        variant="outlined"
        fullWidth
        onChange={handleSearchChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#6b7280" }} />
            </InputAdornment>
          ),
          sx: {
            fontFamily: "'Roboto', sans-serif",
            color: "#1f2937",
            backgroundColor: "#ffffff",
            borderRadius: "15px",
            padding: "4px 12px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease",
            "&:hover": { boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)" },
          },
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "#d1d5db" },
            "&:hover fieldset": { borderColor: "#f43f5e" },
            "&.Mui-focused fieldset": { borderColor: "#f43f5e" },
          },
        }}
      />

      {/* Danh sách liên hệ */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%)",
          borderRadius: "15px 30px 15px 30px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            color: "#1f2937",
            marginBottom: "12px",
          }}
        >
          Liên hệ gần đây
        </Typography>
        <List
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "8px",
          }}
        >
          {contacts.map((contact, index) => (
            <ListItem
              key={index}
              sx={{
                borderRadius: "10px",
                padding: "8px",
                transition: "background 0.2s ease",
                "&:hover": {
                  backgroundColor: "rgba(244, 63, 94, 0.1)",
                  cursor: "pointer",
                },
              }}
            >
              <ListItemAvatar>
                <Avatar
                  alt={contact.name}
                  src={contact.avatar}
                  sx={{
                    width: 48,
                    height: 48,
                    border: "2px solid #fff",
                    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.2s ease",
                    "&:hover": { transform: "scale(1.1)" },
                  }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography
                    sx={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 500,
                      color: "#1f2937",
                    }}
                  >
                    {contact.name}
                  </Typography>
                }
                secondary={
                  <Typography
                    sx={{
                      fontFamily: "'Roboto', sans-serif",
                      color: "#6b7280",
                    }}
                  >
                    {contact.username}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
        <Box sx={{ marginTop: "12px" }}>
          <Link
            href="#"
            sx={{
              color: "#f43f5e",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Xem thêm
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Sidebar;