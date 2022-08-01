import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sign_In from './pages/Sign_In';
import Sign_Up from './pages/Sign_Up';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px'}}} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="/signin" element={<Sign_In />} />
        <Route path="/signup" element={<Sign_Up />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App;
