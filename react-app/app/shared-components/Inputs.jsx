import React from 'react';
import {TextField} from '@mui/material';

export const OutlinedInput = ({ label, type = "text", onChange, name="", onFocus = () => {}, onBlur = () => {} }) => {
    return (
        <TextField variant="outlined"
                name={name}
                label={label}
                type={type}
                sx={styles.outlinedInput}
                onChange={(e) => onChange(e)}
                onFocus={onFocus}
                onBlur={onBlur}
        />
    );
};

export const StandardInput = ({ label, type = "text", onChange, name="" }) => {
return (
    <TextField variant="standard"
        name={name}
        label={label}
        type={type}
        onChange={(e) => onChange(e)}
        color="warning"
    />
);
};

const styles = {
    outlinedInput:{
        width: "100%",
        height: "inherit",
        border: "2px solid #f29966",
        borderRadius: "4px",
        backgroundColor: "#fff",
        "div": {
            height: "inherit",
        },
    }
}