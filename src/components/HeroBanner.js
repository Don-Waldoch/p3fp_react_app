import React from 'react';
import { Box, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/young-couple-workout-1487352885qp4.png';

const HeroBanner = () => {
  return (
    <Box sx={{
        mt: { lg: '140px', xs: '70px' },
        ml: { sm: '50px' }
      }} position="relative" p="20px">
      <Typography color="#9C27B0" fontWeight={600} fontSize="30px">
        Dwalz Fitness
      </Typography>
      <Typography fontWeight={700} sx={{
          fontSize: { lg: '44px', xs: '40px' }
        }}
        mb="20px" mt="20px"
      >
        Reps, <br/> Recover, <br/> Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective<br/>
        exercises personalized to you
      </Typography>
      <Button variant="contained" color="secondary" href="#exercises"
        sx={{ padding: '10px' }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#9C27B0"
        sx={{
          opacity: 0.1,
          display: { lg: 'block', xs: 'none' }
        }}
        fontSize="200px"
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
