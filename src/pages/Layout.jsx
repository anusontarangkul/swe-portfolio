import React from 'react';
import Drawer from '@mui/material/Drawer';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

// const drawerWidth = 240;
// const style = {
//   mt: 5,
//   color: 'white',
//   background-color:
// };

const Layout = ({ children }) => {
  return (
    <AppBar
      sx={{
        position: 'static',
        height: 60,
      }}
    >
      <Toolbar>
        <MenuIcon
          sx={{
            // marginLeft: {
            //   xs: 1,
            //   sm: 2,
            //   md: 2,
            //   lg: 2,
            // },
            marginLeft: 1,
            fontSize: '50px',
          }}
        />
        <Typography
          sx={{
            fontSize: 26,
            // marginLeft: {
            //   xs: 1,
            //   sm: 2,
            //   md: 3,
            //   lg: 4,
            // },
            marginLeft: 1,
          }}
        >
          Coding David
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Layout;
