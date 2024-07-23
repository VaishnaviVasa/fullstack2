/*import ReactDOM from "react-dom/client";
import One from "./One";
import Four from "./Four";
import Five from "./Five";
import Three from "./Three"
const rootElement=document.getElementById('root');
const rootRef=ReactDOM.createRoot(rootElement);
rootRef.render(<Three/>)*/
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import UserProfileGrid from './UserProfileGrid';
import { Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <Container>
      <UserProfileGrid />
    </Container>
  </React.StrictMode>
);
