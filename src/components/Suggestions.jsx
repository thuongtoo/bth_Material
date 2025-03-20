import React from 'react';
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
  Paper 
} from '@mui/material';

// Mock data for suggestions
const suggestedUsers = [
  {
    id: 1,
    name: 'John Doe',
    username: '@johndoe',
    avatar: 'https://mui.com/static/images/avatar/1.jpg'
  },
  {
    id: 2,
    name: 'Jane Smith',
    username: '@janesmith',
    avatar: 'https://mui.com/static/images/avatar/2.jpg'
  },
  {
    id: 3,
    name: 'Mike Johnson',
    username: '@mikejohnson',
    avatar: 'https://mui.com/static/images/avatar/3.jpg'
  },
  // Add more users as needed
];

const Suggestions = () => {
  const [following, setFollowing] = React.useState({});

  const handleFollow = (userId) => {
    setFollowing(prev => ({
      ...prev,
      [userId]: !prev[userId]
    }));
  };

  return (
    <Paper 
      sx={{ 

        p: 2,
        maxWidth: 300,
        backgroundColor: '#fff',
        boxShadow: 1
      }}
    >
      <Typography 
        variant="h6" 
        sx={{ 
          mb: 2, 
          fontWeight: 'bold',
          fontSize: '1rem'
        }}
      >
        Suggestions For You
      </Typography>

      <List sx={{ width: '100%' }}>
        {suggestedUsers.map((user) => (
          <ListItem 
            key={user.id}
            sx={{ 
              px: 0,
              '&:hover': {
                backgroundColor: '#f5f5f5'
              }
            }}
          >
            <ListItemAvatar>
              <Avatar 
                src={user.avatar}
                sx={{ width: 40, height: 40 }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontWeight: 'bold',
                    fontSize: '0.9rem'
                  }}
                >
                  {user.name}
                </Typography>
              }
              secondary={
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                  sx={{ fontSize: '0.8rem' }}
                >
                  {user.username}
                </Typography>
              }
            />
            <ListItemSecondaryAction>
              <Button
                variant="text"
                size="small"
                sx={{
                  color: following[user.id] ? 'text.secondary' : 'primary.main',
                  textTransform: 'none',
                  fontWeight: 'bold',
                  fontSize: '0.8rem'
                }}
                onClick={() => handleFollow(user.id)}
              >
                {following[user.id] ? 'Following' : 'Follow'}
              </Button>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default Compon_Suggestions;