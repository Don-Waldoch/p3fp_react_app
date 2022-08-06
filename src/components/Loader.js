import React from 'react';
import { CircularProgress, Stack } from '@mui/material';

const Loader = () => {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center" width="50%" mt="20px" >
      <CircularProgress />
    </Stack>
  );
};

export default Loader;
