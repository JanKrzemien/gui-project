import './FiltersSection.css';

export const FiltersSection = ({ 
  onSortChange, 
  onMembershipChange, 
  onTypeChange, 
  sortValue, 
  membershipValue, 
  typeValue
}) => {
  return (
    <div className="filters-section">
      <div className="title-container">
        <h2 className="title">Zastosuj filtry:</h2>
      </div>
      
      <div className="filters-container">
        <div className="select-wrapper">
          <div className="input-container">
            <div className="label-container">
              <span className="label">Sortowane po</span>
            </div>
            <div className="select-content">
              <select value={sortValue} onChange={onSortChange} className="select-input">
                <option value="A do Z">A do Z</option>
              </select>
              <img src="https://dashboard.codeparrot.ai/api/assets/Z4F1ZQIBBLnlud8D" alt="dropdown" className="dropdown-icon" />
            </div>
          </div>
        </div>

        <div className="select-wrapper">
          <div className="input-container">
            <div className="label-container">
              <span className="label">Członek grupy</span>
            </div>
            <div className="select-content">
              <select value={membershipValue} onChange={onMembershipChange} className="select-input">
                <option value="Brak członkostwa">Brak członkostwa</option>
              </select>
              <img src="https://dashboard.codeparrot.ai/api/assets/Z4F1ZQIBBLnlud8E" alt="dropdown" className="dropdown-icon" />
            </div>
          </div>
        </div>

        <div className="select-wrapper">
          <div className="input-container">
            <div className="label-container">
              <span className="label">Gatunek</span>
            </div>
            <div className="select-content">
              <select value={typeValue} onChange={onTypeChange} className="select-input">
                <option value="Wszystkie">Wszystkie</option>
              </select>
              <img src="https://dashboard.codeparrot.ai/api/assets/Z4F1ZQIBBLnlud8F" alt="dropdown" className="dropdown-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
