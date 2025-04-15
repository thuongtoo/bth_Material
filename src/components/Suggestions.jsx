import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
} from "@mui/material";

const suggestedUsers = [
  {
    id: 1,
    name: "John Doe",
    username: "@johndoe",
    avatar: "https://mui.com/static/images/avatar/1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    username: "@janesmith",
    avatar: "https://mui.com/static/images/avatar/2.jpg",
  },
  {
    id: 3,
    name: "Mike Johnson",
    username: "@mikejohnson",
    avatar: "https://mui.com/static/images/avatar/3.jpg",
  },
];

const Suggestions = ({ searchQuery }) => {
  const [following, setFollowing] = React.useState({});

  const handleFollow = (userId) => {
    setFollowing((prev) => ({
      ...prev,
      [userId]: !prev[userId],
    }));
  };

  const filteredUsers = searchQuery
    ? suggestedUsers.filter(
        (user) =>
          user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.username.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : suggestedUsers;

  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "300px" },
        padding: "16px",
        background: "linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%)",
        borderRadius: "15px 30px 15px 30px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        position: "sticky",
        top: "20px",
        alignSelf: "flex-start",
        transition: "transform 0.2s ease",
        "&:hover": { transform: "scale(1.02)" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            color: "#1f2937",
            fontSize: "1.1rem",
          }}
        >
          {searchQuery ? "Kết quả tìm kiếm" : "Gợi ý cho bạn"}
        </Typography>
        {!searchQuery && (
          <Typography
            sx={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              color: "#f43f5e",
              fontSize: "0.9rem",
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
            component="a"
            href="#"
          >
            Xem tất cả
          </Typography>
        )}
      </Box>

      {filteredUsers.length > 0 ? (
        <List sx={{ padding: 0 }}>
          {filteredUsers.map((user) => (
            <ListItem
              key={user.id}
              sx={{
                borderRadius: "10px",
                padding: "8px 12px",
                transition: "background 0.2s ease",
                "&:hover": {
                  backgroundColor: "rgba(244, 63, 94, 0.1)",
                },
              }}
            >
              <ListItemAvatar>
                <Avatar
                  src={user.avatar}
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
                      fontSize: "0.95rem",
                    }}
                  >
                    {user.name}
                  </Typography>
                }
                secondary={
                  <Typography
                    sx={{
                      fontFamily: "'Roboto', sans-serif",
                      color: "#6b7280",
                      fontSize: "0.85rem",
                    }}
                  >
                    {user.username}
                  </Typography>
                }
              />
              <ListItemSecondaryAction>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => handleFollow(user.id)}
                  sx={{
                    fontFamily: "'Inter', sans-serif",
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    borderRadius: "12px",
                    borderColor: following[user.id] ? "#6b7280" : "#f43f5e",
                    color: following[user.id] ? "#6b7280" : "#f43f5e",
                    backgroundColor: following[user.id]
                      ? "transparent"
                      : "rgba(244, 63, 94, 0.05)",
                    px: 2,
                    transition: "all 0.2s ease",
                    "&:hover": {
                      borderColor: following[user.id] ? "#1f2937" : "#e11d48",
                      color: following[user.id] ? "#1f2937" : "#e11d48",
                      backgroundColor: following[user.id]
                        ? "transparent"
                        : "rgba(244, 63, 94, 0.1)",
                    },
                  }}
                >
                  {following[user.id] ? "Đang theo dõi" : "Theo dõi"}
                </Button>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography
          sx={{
            fontFamily: "'Roboto', sans-serif",
            color: "#6b7280",
            fontSize: "0.95rem",
            textAlign: "center",
            py: 2,
          }}
        >
          Không tìm thấy người dùng.
        </Typography>
      )}
    </Box>
  );
};

export default Suggestions;