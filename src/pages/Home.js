import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';

const Home = ({authUser, bodyPart, setBodyPart}) => {
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      <HeroBanner authUser={authUser} />
      <SearchExercises
        authUser={authUser}
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        authUser={authUser}
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
};

export default Home;
