import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const UserProfileCard = ({ user }) => {
  return (
    <Card style={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={user.image}
        alt={`${user.name}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {user.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user.position}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user.company}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user.sharedConnections} shared connections
        </Typography>
        <Button variant="contained" style={{ marginTop: 10 }}>
          Connect
        </Button>
      </CardContent>
    </Card>
  );
};

export default UserProfileCard;
