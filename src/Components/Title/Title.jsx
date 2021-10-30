import React from 'react';
import { Typography } from '@mui/material';
import ReactPlayer from 'react-player';
import './Title.scss';
const Title = () => {
  return (
    <>
      <Typography
        sx={{
          paddingTop: 15,
          fontSize: 100,
          textAlign: 'center',
        }}
      >
        David Anusontarangkul
      </Typography>
      <Typography
        sx={{
          textAlign: 'center',
          fontSize: 50,
        }}
      >
        Software Engineer
      </Typography>
      <div className='video'>
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://www.youtube.com/watch?v=ug50zmP9I7s'
            width='100%'
            height='100%'
          />
        </div>
      </div>
    </>
  );
};

export default Title;
