import React from 'react';
import UserProfileCard from './UserProfileCard';
import { Grid } from '@mui/material';
import samsung from './samsung.png';
import tinker1 from './tinker1.jpg';
const users = [
  {
    name: 'Samsung Galaxy',
    position: 'top most product company',
    company: '',
    image: samsung,
    sharedConnections: 23
  },
  {
    name: 'Tinkerbell',
    position: 'disney fairy tales',
    company: '',
    image: tinker1,
    sharedConnections: 7
  },
  // Add more user data as needed
];

const UserProfileGrid = () => {
  return (
    <Grid container spacing={2}>
      {users.map((user, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <UserProfileCard user={user} />
        </Grid>
      ))}
    </Grid>
  );
};

export default UserProfileGrid;
