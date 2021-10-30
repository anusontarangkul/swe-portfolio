import React, { history } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   NavLink,
// } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { ListItemButton, ListItemText } from '@mui/material';
import resume from './resume.pdf';

const NavRouter = () => {
  return (
    <>
      <Link smooth to='#about'>
        <ListItemButton
          sx={{
            marginTop: 4,
          }}
        >
          <ListItemText primary='About' />
        </ListItemButton>
      </Link>
      <Link smooth to='#skills'>
        <ListItemButton>
          <ListItemText primary='Skills' />
        </ListItemButton>
      </Link>
      <Link smooth to='#projects'>
        <ListItemButton>
          <ListItemText primary='Projects' />
        </ListItemButton>
      </Link>
      <a href={resume} download='anusontarangkul-resume'>
        <ListItemButton>
          <ListItemText primary='Resume' />
        </ListItemButton>
      </a>
    </>
  );
};

export default NavRouter;
