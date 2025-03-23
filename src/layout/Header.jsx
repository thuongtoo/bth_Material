import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Tab,
  Tabs,
  IconButton,
  Avatar,
  Badge
} from '@mui/material';
import {
  Bolt as BoltIcon,
  Home as HomeIcon,
  Person as PersonIcon,
  Email as EmailIcon,
  Notifications as NotificationsIcon
} from '@mui/icons-material';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (_event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <AppBar position="absolute" sx={{ bgcolor: '#111', minHeight: 64 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo Section */}
        <IconButton edge="start" color="inherit" aria-label="logo" sx={{ mr: 2 }}>
          <BoltIcon sx={{ color: '#4caf50', fontSize: 28 }} />
        </IconButton>

        {/* Navigation Tabs Section */}
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: '#4caf50',
              height: 3
            }
          }}
        >
          <Tab
            icon={<HomeIcon />}
            sx={{
              color: activeTab === 0 ? '#fff' : '#aaa',
              '&.Mui-selected': { color: '#fff' },
              minWidth: 100
            }}
          />
          <Tab
            icon={<PersonIcon />}
            sx={{
              color: activeTab === 1 ? '#fff' : '#aaa',
              '&.Mui-selected': { color: '#fff' },
              minWidth: 100
            }}
          />
          <Tab
            icon={<EmailIcon />}
            sx={{
              color: activeTab === 2 ? '#fff' : '#aaa',
              '&.Mui-selected': { color: '#fff' },
              minWidth: 100
            }}
          />
          <Tab
            icon={<NotificationsIcon />}
            sx={{
              color: activeTab === 2 ? '#fff' : '#aaa',
              '&.Mui-selected': { color: '#fff' },
              minWidth: 100
            }}
          />
        </Tabs>

        {/* Profile Section */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
            <Typography variant="body1" sx={{ mr: 1, display: { xs: 'none', sm: 'block' } }}>
              Diogo Forlan
            </Typography>
            <Avatar alt="Diogo Forlan" src="/avatar.jpg" />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
