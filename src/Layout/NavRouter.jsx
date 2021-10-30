import React, { history } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';
import { ListItemButton, ListItemText } from '@mui/material';
import resume from './resume.pdf';

const NavRouter = () => {
  return (
    <>
      <NavLink to='/about'>
        <ListItemButton
          sx={{
            marginTop: 4,
          }}
        >
          <ListItemText primary='About' />
        </ListItemButton>
      </NavLink>
      <NavLink to='/skills'>
        <ListItemButton>
          <ListItemText primary='Skills' />
        </ListItemButton>
      </NavLink>
      <NavLink to='/projects'>
        <ListItemButton>
          <ListItemText primary='Projects' />
        </ListItemButton>
      </NavLink>
      <a href={resume} download='anusontarangkul-resume'>
        <ListItemButton>
          <ListItemText primary='Resume' />
        </ListItemButton>
      </a>
    </>
  );
};

export default NavRouter;
