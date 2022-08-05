import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Footer from './components/Footer';
import Home from './pages/Home';
// import SignInPage from './pages/SignInPage';
// import SignUpPage from './pages/SignUpPage';
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const App = () => {
  const [authUser, setAuthUser] = useState({});
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box width="400px" sx={{ width: { xl: '1488px'}}} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home  authUser={authUser} bodyPart={bodyPart} setBodyPart={setBodyPart} />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="/signin" element={<SignIn setAuthUser={setAuthUser} setBodyPart={setBodyPart} />} />
        <Route path="/signup" element={<SignUp setAuthUser={setAuthUser} setBodyPart={setBodyPart} />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
