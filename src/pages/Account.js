import React, { useState } from 'react';
import { Box } from '@mui/material';

import Login from '../components/Login';

const Account = () => {
    const [bodyPart, setBodyPart] = useState('all');
    const [exercises, setExercises] = useState([]);
  
    return (
      <Box>
        <Login />
      </Box>
    )
  }
  
  export default Account;
