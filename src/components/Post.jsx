import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentIcon from "@mui/icons-material/Comment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Box } from "@mui/material";

export default function Post({ caption, img, like, comment, view, share }) {
  const [likes, setLikes] = useState(like);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setLikes((prevLikes) => (isLiked ? prevLikes - 1 : prevLikes + 1));
    setIsLiked(!isLiked);
  };

  return (
    <Card
      sx={{
        maxWidth: "600px",
        width: "100%",
        margin: "20px auto",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        borderRadius: "15px 30px 15px 30px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        overflow: "visible",
        transition: "transform 0.2s",
        "&:hover": { transform: "scale(1.02)" },
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "12px 16px",
          borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", gap: 1 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: "#1a3c34",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Diogo Forlan
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#6b7280",
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            9 hours ago
          </Typography>
        </Box>
        <IconButton aria-label="settings">
          <MoreHorizIcon sx={{ color: "#1a3c34" }} />
        </IconButton>
      </Box>

      {/* Image and Avatar Overlay */}
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          image={img}
          alt="Post content"
          sx={{
            width: "100%",
            height: "auto",
            maxHeight: "400px",
            objectFit: "cover",
            borderRadius: "10px",
            margin: "10px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
          }}
        />
        <Avatar
          src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="User Avatar"
          sx={{
            width: 60,
            height: 60,
            position: "absolute",
            bottom: "-30px",
            left: "20px",
            border: "3px solid #fff",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
          }}
        />
      </Box>

      {/* Caption */}
      <CardContent sx={{ padding: "40px 16px 16px" }}>
        <Typography
          variant="body1"
          sx={{
            color: "#2d3748",
            fontFamily: "'Roboto', sans-serif",
            lineHeight: 1.6,
            maxWidth: "90%",
          }}
        >
          {caption}
        </Typography>
      </CardContent>

      {/* Actions */}
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-around",
          padding: "8px 16px",
          background: "rgba(255, 255, 255, 0.5)",
          borderTop: "1px solid rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton
            onClick={handleLike}
            sx={{
              bgcolor: isLiked ? "rgba(255, 99, 71, 0.1)" : "transparent",
              "&:hover": { bgcolor: "rgba(255, 99, 71, 0.2)" },
            }}
          >
            {isLiked ? (
              <FavoriteIcon sx={{ color: "#ff6347", fontSize: "22px" }} />
            ) : (
              <FavoriteBorderIcon sx={{ color: "#6b7280", fontSize: "22px" }} />
            )}
          </IconButton>
          <Typography
            variant="body2"
            sx={{ color: "#2d3748", fontWeight: 500 }}
          >
            {likes}K
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton
            sx={{
              "&:hover": { bgcolor: "rgba(59, 130, 246, 0.2)" },
            }}
          >
            <CommentIcon sx={{ color: "#6b7280", fontSize: "22px" }} />
          </IconButton>
          <Typography
            variant="body2"
            sx={{ color: "#2d3748", fontWeight: 500 }}
          >
            {comment}K
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton
            sx={{
              "&:hover": { bgcolor: "rgba(16, 185, 129, 0.2)" },
            }}
          >
            <VisibilityIcon sx={{ color: "#6b7280", fontSize: "22px" }} />
          </IconButton>
          <Typography
            variant="body2"
            sx={{ color: "#2d3748", fontWeight: 500 }}
          >
            {view}M
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton
            sx={{
              "&:hover": { bgcolor: "rgba(245, 158, 11, 0.2)" },
            }}
          >
            <ShareIcon sx={{ color: "#6b7280", fontSize: "22px" }} />
          </IconButton>
          <Typography
            variant="body2"
            sx={{ color: "#2d3748", fontWeight: 500 }}
          >
            {share}K
          </Typography>
        </Box>
      </CardActions>
    </Card>
  );
}