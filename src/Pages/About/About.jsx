import React from 'react';
import './About.scss';
import { Typography, Container } from '@mui/material';

import Questions from '../../Components/Questions/Questions';
const About = () => {
  return (
    <div className='about' id='about'>
      <Typography
        variant='h2'
        sx={{
          textAlign: 'center',
          paddingTop: 15,
        }}
      >
        About Me
      </Typography>
      <Questions />
    </div>
  );
};

export default About;
