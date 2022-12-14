import React from 'react';
import { Typography, Stack, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ authUser, exerciseDetail, setBodyPart }) => {
  const { bodyPart, gifUrl, id, name, target, equipment } = exerciseDetail;
  const navigate = useNavigate();

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart
    },
    {
      icon: TargetImage,
      name: target
    },
    {
      icon: EquipmentImage,
      name: equipment
    }
  ];

  const handleFavorite = async (event) => {
    event.preventDefault();

    if (authUser.hasOwnProperty('userid')) {
      const requestOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          exerciseid: id,
          userid: authUser.userid
        })
      };

      const response = await fetch(
        `${process.env.REACT_APP_DB_URL}/favorites`,
        requestOptions
      );

      if (response.status === 200) {
        setBodyPart('favorites');
        navigate('/');
      }
    }
  };

  return (
    <Stack gap="60px" sx={{
      mt: "30px",
      flexDirection: { lg: 'row', p: '20px', alignItems: 'center'}
    }}>
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx ={{ gap: { lg: '35px', xs: '20px' }}}>
        <Typography variant="h3" textTransform="capitalize" color="#9C27B0">
          {name}
        </Typography>
        {authUser.hasOwnProperty('userid') &&
          <Button className="favorite-btn"
           sx={{
              bgcolor: "#9127B0",
              color: "#FFFFFF",
              textTransform: 'none',
              width: { lg: '175px', xs: '80px'},
              fontSize: { lg: '20px', xs: '14px'},
              height: '56px',
              right: '0'
            }}
            onClick={handleFavorite}
          >
            Add to Favorites
          </Button>
        }
        <Typography variant="h6" pr="15px">
          Exercises keep you strong and {` `}
          {name} is one of the best exercises to target your {target}.
          It will help you improve your mood and gain energy.
        </Typography>
        {extraDetail.map((item) => (
          <Stack direction="row" gap="24px" alignItems="center">
            <Button key={item.name} sx={{
              background: '#EDE4AE',
              borderRadius: '50%',
              width: '100px',
              height: '100px'
              }}>
              <img src={item.icon} alt={bodyPart} style={{
                width: '50px',
                height: '50px'
              }} />
            </Button>
            <Typography variant="h5" textTransform="capitalize">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
