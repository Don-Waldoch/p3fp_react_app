import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Logo from '../assets/images/Dwalz.png';

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#F4F4F4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="200px" height="32px" />
      </Stack>
      <Typography variant="h5" sx={{
          fontSize: { lg: '28px', xs: '20px' }
        }} mt="20px" textAlign="center" pb="40px">
        Made with 💜 by Don Waldoch
      </Typography>
    </Box>
  )
}

export default Footer;
