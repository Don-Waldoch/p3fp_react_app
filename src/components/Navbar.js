import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" sx={{
        gap: {sm: '100px', xs: '40px'}, mt: { sm: '32px', xs: '20px'}, justifyContent: 'none'
      }} px="20px">
      <Link to="/">
        <img src={Logo} alt="logo" style={{width: '48px', height: '48px', margin: '0 20px'}} />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link to="/" style={{ textDecoration: 'none', color: "#3A1212", borderBottom : '3px solid #9C27B0'}}>Home</Link>
        {/* <a href="/#exercises" style={{textDecoration: 'none', color: '#3A1212'}}>Exercises</a> */}
        {/* <a href="#login" style={{textDecoration: 'none', color: '#3A1212'}}>Login</a> */}
        <Link to="/signin" style={{ textDecoration: 'none', color: "#3A1212"}}>Sign In</Link>
        <Link to="/signup" style={{ textDecoration: 'none', color: "#3A1212"}}>Sign Up</Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;
