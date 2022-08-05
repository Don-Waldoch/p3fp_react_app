import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchRapidAPI } from '../utils/APIs';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ authUser,  exercises, setExercises, bodyPart }) => {
  // console.log(exercises);

  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth'})
  };

  useEffect(() => {
    console.log(bodyPart);
    console.log(authUser);

    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchRapidAPI(
          'https://exercisedb.p.rapidapi.com/exercises',
          exerciseOptions
        );
      } else if (bodyPart === 'favorites') {
        let allData = await fetchRapidAPI(
          'https://exercisedb.p.rapidapi.com/exercises',
          exerciseOptions
        );

        const requestOptions = {
          method: "GET",
        };
        const response = await fetch(
          `${process.env.REACT_APP_DB_URL}/favorites/${authUser.userid}`,
          requestOptions
        );
        const favorites = await response.json();

        let subArray = [];
        favorites.forEach((element) => {
          const filteredArray = allData.filter(entry => entry.id === element.exerciseid);
          exercisesData = subArray.concat(filteredArray);
          subArray = exercisesData;
        });
      } else {
        exercisesData = await fetchRapidAPI(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [authUser, bodyPart, setExercises]);

  return (
    <Box id="exercises"
      sx={{mt: { lg: '110px'}}}
      mt="50px"
      p="20px"
    >
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack 
        direction="row"
        sx={{ gap: { lg: '110px', xs: '50px'}}}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="secondary"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={ paginate }
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
