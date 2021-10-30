import React from 'react';
import {
  SwipeableDrawer,
  AppBar,
  Toolbar,
  Avatar,
  Grid,
  ListItemButton,
  ListItemText,
  Typography,
  Button,
  Drawer,
  Box,
  CssBaseline,
  IconButton,
  Divider,
  Link,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import CallIcon from '@mui/icons-material/Call';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import NavRouter from './NavRouter';

const drawerWidth = 300;

const Layout = (props) => {
  const { window } = props;
  const { children } = props;

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Grid
        container
        spacing={0}
        direction='column'
        alignItems='center'
        // style={{ minHeight: '100vh' }}
      >
        <Grid
          item
          sx={{
            paddingTop: 5,
          }}
        >
          <Avatar
            alt='David Anusontarangkul'
            sx={{
              width: 120,
              height: 120,
            }}
          />
        </Grid>
        <NavRouter />
        {/* <ListItemButton
          sx={{
            marginTop: 4,
          }}
        >
          <ListItemText primary='About' />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary='Skills' />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary='Projects' />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary='Resume' />
        </ListItemButton> */}
        <Typography sx={{ fontSize: 30 }}>Social Media</Typography>
        <Link href='https://github.com/anusontarangkul' target='_blank'>
          <GitHubIcon />
        </Link>
        <Link
          href='https://www.linkedin.com/in/anusontarangkul/'
          target='_blank'
        >
          <LinkedInIcon />
        </Link>
        <Link
          href='https://www.youtube.com/channel/UCYBwball06AdVuaHeH7adVw'
          target='_blank'
        >
          <YouTubeIcon />
        </Link>
        <Link href='https://twitter.com/coding_david' target='_blank'>
          <TwitterIcon />
        </Link>
        <Link
          href='https://calendly.com/anusontarangkul/15min?month=2021-10'
          target='_blank'
        >
          <Button variant='contained'>
            <CallIcon />
            Book a Call
          </Button>
        </Link>
      </Grid>
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position='fixed'
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap component='div'>
            Coding David
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component='nav'
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label='mailbox folders'
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sm: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant='permanent'
          sx={{
            display: { sm: 'none', md: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        {children}
      </Box>
    </Box>
  );
};

export default Layout;
