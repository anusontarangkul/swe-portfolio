import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ListItemButton, ListItemText } from '@mui/material';
import About from '../../components/About/About';

const NavRouter = () => {
  return (
    <>
      <Router>
        <Link to='/about'>
          <ListItemButton
            sx={{
              marginTop: 4,
            }}
          >
            <ListItemText primary='About' />
          </ListItemButton>
        </Link>
        <ListItemButton>
          <ListItemText primary='Skills' />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary='Projects' />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary='Resume' />
        </ListItemButton>
      </Router>
    </>
  );
};

export default NavRouter;
