import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';
import { textTransform } from '@mui/system';

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
      <Button sx={{
          ml: '21px',
          color: '#FFFFFF',
          background: '#27B09C',
          fontSize: '14px',
          borderRadius: '20px',
          textTransform: 'capitalize'
        }}>
          {exercise.bodyPart}
        </Button>
        <Button sx={{
          ml: '21px',
          color: '#FFFFFF',
          background: '#B09C27',
          fontSize: '14px',
          borderRadius: '20px',
          textTransform: 'capitalize'
        }}>
          {exercise.target}
        </Button>
        <Button sx={{
          ml: '21px',
          color: '#FFFFFF',
          background: '#9C27B0',
          fontSize: '14px',
          borderRadius: '20px',
          textTransform: 'capitalize'
        }}>
          Add to Favorites
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#000000"
        fontWeight="bold"
        mt="11px"
        pb="10px"
        textTransform="capitalize"
        fontSize="22px"
      >
        {exercise.name}
      </Typography>
    </Link>
  )
}

export default ExerciseCard;
