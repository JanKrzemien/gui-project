import { useState } from 'react';
import './Filters.css';

export const Filters = ({ 
  onSortChange = () => {},
  onStatusChange = () => {},
  onGenreChange = () => {},
  initialSort = 'A do Z',
  initialStatus = 'Nieprzeczytane',
  initialGenre = 'Wszystkie'
}) => {
  const [sort, setSort] = useState(initialSort);
  const [status, setStatus] = useState(initialStatus);
  const [genre, setGenre] = useState(initialGenre);

  const handleSortChange = (e) => {
    setSort(e.target.value);
    onSortChange(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    onStatusChange(e.target.value);
  };

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
    onGenreChange(e.target.value);
  };

  return (
    <div className="filters-container">
      <div className="title-container">
        <span className="filters-title">Zastosuj filtry:</span>
      </div>
      <div className="filters-row">
        <div className="select-container">
          <div className="label-container">
            <label className="select-label">Sortowane po</label>
          </div>
          <div className="input-container">
            <select 
              value={sort}
              onChange={handleSortChange}
              className="select-input"
            >
              <option value="A do Z">A do Z</option>
              <option value="Z do A">Z do A</option>
            </select>
            <img src="https://dashboard.codeparrot.ai/api/assets/Z4FyyQIBBLnlud72" alt="" className="select-arrow" />
          </div>
        </div>

        <div className="select-container">
          <div className="label-container">
            <label className="select-label">Status przeczytania</label>
          </div>
          <div className="input-container">
            <select
              value={status}
              onChange={handleStatusChange}
              className="select-input"
            >
              <option value="Nieprzeczytane">Nieprzeczytane</option>
              <option value="Przeczytane">Przeczytane</option>
            </select>
            <img src="https://dashboard.codeparrot.ai/api/assets/Z4FyyQIBBLnlud73" alt="" className="select-arrow" />
          </div>
        </div>

        <div className="select-container">
          <div className="label-container">
            <label className="select-label">Gatunek</label>
          </div>
          <div className="input-container">
            <select
              value={genre}
              onChange={handleGenreChange}
              className="select-input"
            >
              <option value="Wszystkie">Wszystkie</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Sci-Fi">Sci-Fi</option>
            </select>
            <img src="https://dashboard.codeparrot.ai/api/assets/Z4FyyQIBBLnlud74" alt="" className="select-arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};
