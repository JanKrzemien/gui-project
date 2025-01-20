import React from 'react';
import './Filters.css';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export const FiltersSection = ({ onSortChange, onMembershipChange, onTypeChange, sortValue, membershipValue, typeValue }) => {
  return (
    <div className="filters-container">
      <div className="title-container">
        <span className="filters-title">Zastosuj filtry:</span>
      </div>
      <div className="filters-row">
        <div className="select-container">
          <div className="label-container">
            <InputLabel className="select-label">Sortowane po</InputLabel>
          </div>
          <div className="input-container">
            <FormControl variant="outlined" sx={{ width: '100%', height: 40 }}>
              <Select
                value={sortValue}
                onChange={onSortChange}
                label="Sortowane po"
                sx={{
                  fontFamily: 'Nunito, sans-serif',
                  fontSize: 16,
                  height: 40,
                  backgroundColor: '#ffffff',
                  borderRadius: 2,
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#f29966',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#f29966',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#f29966',
                    boxShadow: '0 0 5px rgba(242, 153, 102, 0.5)',
                  },
                }}
              >
                <MenuItem value="A do Z">A do Z</MenuItem>
                <MenuItem value="Z do A">Z do A</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="select-container">
          <div className="label-container">
            <InputLabel className="select-label">Status przeczytania</InputLabel>
          </div>
          <div className="input-container">
            <FormControl variant="outlined" sx={{ width: '100%', height: 40 }}>
              <Select
                value={membershipValue}
                onChange={onMembershipChange}
                label="Status przeczytania"
                sx={{
                  fontFamily: 'Nunito, sans-serif',
                  fontSize: 16,
                  height: 40,
                  backgroundColor: '#ffffff',
                  borderRadius: 2,
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#f29966',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#f29966',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#f29966',
                    boxShadow: '0 0 5px rgba(242, 153, 102, 0.5)',
                  },
                }}
              >
                <MenuItem value="Brak członkostwa">Brak członkostwa</MenuItem>
                <MenuItem value="Członek">Członek</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="select-container">
          <div className="label-container">
            <InputLabel className="select-label">Gatunek</InputLabel>
          </div>
          <div className="input-container">
            <FormControl variant="outlined" sx={{ width: '100%', height: 40 }}>
              <Select
                value={typeValue}
                onChange={onTypeChange}
                label="Gatunek"
                sx={{
                  fontFamily: 'Nunito, sans-serif',
                  fontSize: 16,
                  height: 40,
                  backgroundColor: '#ffffff',
                  borderRadius: 2,
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#f29966',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#f29966',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#f29966',
                    boxShadow: '0 0 5px rgba(242, 153, 102, 0.5)',
                  },
                }}
              >
                <MenuItem value="Wszystkie">Wszystkie</MenuItem>
                <MenuItem value="Fikcja">Fikcja</MenuItem>
                <MenuItem value="Naukowe">Naukowe</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
    </div>
  );
};
