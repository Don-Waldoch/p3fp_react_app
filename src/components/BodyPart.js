import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={
      bodyPart === item ? {
        borderTop: '4px solid #9C27B0',
        background: '#FFFFFF',
        borderBottomLeftRadius: '20px',
        width: '170px', 
        height: '182px', 
        cursor: 'pointer',
        gap: '47px'
      } : {
        background: '#FFFFFF',
        borderBottomLeftRadius: '20px',
        width: '170px',
        height: '182px',
        cursor: 'pointer',
        gap: '47px'
      }
    }
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
    <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>
  </Stack>
);

export default BodyPart;
