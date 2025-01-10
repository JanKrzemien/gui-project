import { GroupListItem } from '../shared-components/GroupListItem';
import { FiltersSection}  from '../shared-components/FiltersSection';
import './GroupsContentPage.css';

export const GroupsContentPage = () => {
  const handleSortChange = (event) => {
    console.log('Sort by:', event.target.value);
  };

  const handleMembershipChange = (event) => {
    console.log('Membership:', event.target.value);
  };

  const handleTypeChange = (event) => {
    console.log('Type:', event.target.value);
  };

  const handleJoin = () => {
    console.log('Join group');
  };

  return (
    <div className="groups-page">
      <div className="content">
        <h1 className="group-title">Wszystkie grupy:</h1>
        <FiltersSection 
          onSortChange={handleSortChange} 
          onMembershipChange={handleMembershipChange} 
          onTypeChange={handleTypeChange} 
        />
        <div className="group-list">
          {[...Array(8)].map((_, index) => (
            <GroupListItem key={index} onJoin={handleJoin} />
          ))}
        </div>
      </div>
    </div>
  );
};
