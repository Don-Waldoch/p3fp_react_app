import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Logo from '../assets/images/Dwalz.png';

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#F4F4F4">
      <Stack gap="10px" alignItems="center" px="40px" pt="12px">
        <img src={Logo} alt="logo" width="200px" height="32px" />
      </Stack>
      <Typography variant="h5" sx={{
          fontSize: { lg: '14px', xs: '10px' }
        }} mt="10px" textAlign="center" pb="10px">
        Made with 💜 by Don Waldoch
      </Typography>
    </Box>
  );
};

export default Footer;
