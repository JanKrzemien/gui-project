import React from 'react';
import {Button} from '@mui/material';

export const ContainedButton = ({ text, onClick }) => {
  return (
    <Button variant="contained" onClick={onClick} style={styles.contained_button}>
      {text}
    </Button>
  );
};

export const TextButton = ({ text, onClick }) => {
  return (
    <Button variant="text" onClick={onClick} style={styles.text_button}>
      {text}
    </Button>
  );
};

export const OutlineButton = ({ text, onClick }) => {
  return (
    <Button variant="outlined" onClick={onClick} style={styles.outline_button}>
      {text}
    </Button>
  );
};

export const IconOutlineButton = ({ onClick, children }) => {
  children.array.forEach(element => {
    element.style = [ element.style, styles.outline_button_img ]
  });
  return (
    <Button variant="outlined" onClick={onClick} className="outline-button" startIcon={children}>
    </Button>
  );
};

const styles = {
  contained_button: {
    height: "34px",
    padding: "8px 22px",
    backgroundColor: "#f29966",
    border: "none",
    borderRadius: "4px",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: 400,
    color: "#fff",
    cursor: "pointer",
  },
  text_button: {
    height: "50px",
    padding: "0 15px",
    background: "none",
    border: "none",
    fontFamily: "Roboto",
    fontSize: "22px",
    fontWeight: 400,
    color: "#000000",
    cursor: "pointer",
  },
  outline_button: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "40px",
    padding: "0 12px",
    backgroundColor: "#fff",
    border: "2px solid #f29966",
    borderRadius: "4px",
  },
  outline_button_img: {
    width: "20px",
    height: "20px",
  }
}