import React from 'react';
import {Button} from '@mui/material';
import './Buttons.css';

export const ContainedButton = ({ text, onClick }) => {
  return (
    <Button variant="contained" onClick={onClick} className="contained-button">
      {text}
    </Button>
  );
};

export const TextButton = ({ text, onClick }) => {
  return (
    <Button variant="text" onClick={onClick} className="text-button">
      {text}
    </Button>
  );
};

export const OutlineButton = ({ text, onClick }) => {
  return (
    <Button variant="outlined" onClick={onClick} className="outline-button">
      {text}
    </Button>
  );
};

export const IconOutlineButton = ({ onClick, children }) => {
  return (
    <Button variant="outlined" onClick={onClick} className="outline-button" startIcon={children}>
    </Button>
  );
};