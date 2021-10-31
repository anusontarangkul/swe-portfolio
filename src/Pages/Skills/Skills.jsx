import React from 'react';
import './Skills.scss';
import Slider from 'react-slick';
import { useState } from 'react';
import javascript from '../../assets/javascript.png';
import css from '../../assets/css.png';
import html from '../../assets/html.png';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { Typography } from '@mui/material';
const images = [javascript, css, html, javascript, css, html];

const Skills = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className='arrow next' onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <div className='arrow prev' onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };
  const [imageIndex, setImageIndex] = useState(0);
  const [imageIndex1, setImageIndex1] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };
  const settings2 = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex1(next),
  };
  return (
    <div className='skills' id='skills'>
      <Typography
        variant='h3'
        sx={{ paddingTop: 15, textAlign: 'center', marginBottom: 5 }}
      >
        Front End Skills
      </Typography>
      <Slider {...settings} className='slider'>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? 'slide activeSlide' : 'slide'}>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
      <Typography
        variant='h3'
        sx={{ paddingTop: 15, textAlign: 'center', marginBottom: 5 }}
      >
        Back End Skills
      </Typography>
      <Slider {...settings2} className='slider'>
        {images.map((img, idx) => (
          <div className={idx === imageIndex1 ? 'slide activeSlide' : 'slide'}>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Skills;
