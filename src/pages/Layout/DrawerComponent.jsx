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
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import CallIcon from '@mui/icons-material/Call';

const DrawerComponent = ({ open, setOpen }) => {
  return (
    <div>
      <SwipeableDrawer
        anchor='left'
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => {}}
      >
        <div style={{ width: '300px' }}>
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
            <ListItemButton
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
            </ListItemButton>
            <Typography sx={{ fontSize: 30 }}>Social Media</Typography>
            <GitHubIcon />
            <LinkedInIcon />
            <YouTubeIcon />
            <TwitterIcon />
            <Button variant='contained'>
              <CallIcon />
              Book a Call
            </Button>
          </Grid>

          {/* <AppBar
            sx={{
              position: 'static',
              height: 60,
              backgroundColor: 'pink',
            }}
          >
            <Toolbar>

              {/* <MenuIcon
                sx={{
                  marginLeft: 1,
                  fontSize: '50px',
                }}
                onClick={() => setOpen(false)}
              /> */}
          {/* </Toolbar>
          </AppBar> */}
        </div>
      </SwipeableDrawer>
    </div>
  );
};

export default DrawerComponent;
