import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{  mt: { lg: '100px', xs: '0' }}} p="20px">
      <Typography variant="h3" mb="33px">
        Similar <span style={{ color: '#9C27B0', }}>Target Muscle</span> exercises
      </Typography>
      <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
        {
          targetMuscleExercises.length !== 0 ?
          <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />
        }
      </Stack>
      <Typography variant="h3" mb="33px">
        Same <span style={{ color: '#9C27B0', }}>Equipment</span> exercises
      </Typography>
      <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
        {
          equipmentExercises.length !== 0 ?
          <HorizontalScrollbar data={equipmentExercises} /> : <Loader />
        }
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
