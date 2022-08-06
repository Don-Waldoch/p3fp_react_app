import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Logo from '../assets/images/Dwalz.png';
import ExpressJS from '../assets/logos/ExpressJS.png';
import MUI from '../assets/logos/MUI.png';
import Node from '../assets/logos/Node.png';
import ReactImg from '../assets/logos/ReactImg.png';
import PostgreSQL from '../assets/logos/PostgreSQL.png';
import PGPromise from '../assets/logos/PG-Promise.png';

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#F4F4F4">
      <Stack gap="10px" alignItems="center" px="40px" pt="12px">
        <Stack direction="row" gap="24px" alignItems="center">
          <img src={ReactImg} alt="logo" width="32px" height="32px" />
          <img src={ExpressJS} alt="logo" width="200px" height="32px" />
          <img src={Logo} alt="logo" width="225px" height="36px" />
          <img src={Node} alt="logo" width="59px" height="36px" />
          <img src={MUI} alt="logo" width="52px" height="32px" />
          <img src={PostgreSQL} alt="logo" width="44px" height="44px" />
          <img src={PGPromise} alt="logo" width="40px" height="40px" />
        </Stack>
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
