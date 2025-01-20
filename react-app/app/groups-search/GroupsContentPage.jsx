import { GroupListItem } from '../shared-components/GroupListItem';
import { FiltersSection}  from '../shared-components/FiltersSection';
import { useLocalStorage } from '@uidotdev/usehooks';
import { useState, useEffect } from 'react';
import { Separator } from '../shared-components/Separator';
import './GroupsContentPage.css';

export const GroupsContentPage = ({name}) => {
  const [groups, setGroups] = useLocalStorage('groups', [])
  const [filtered, setFiltered] = useState(groups)

  useEffect(() => {
    if(name != '') {
      setFiltered(groups.filter((group, index) => group.name.includes(name)))
    }
  }, [name])


  const handleSortChange = (event) => {
    console.log('Sort by:', event.target.value);
  };

  const handleMembershipChange = (event) => {
    console.log('Membership:', event.target.value);
  };

  const handleTypeChange = (event) => {
    console.log('Type:', event.target.value);
  };

  return (
    <div className="groups-page">
      <div className="groups-content">
        <h1 className="group-title">Wyszukiwanie dla "{name}":</h1>

        <Separator />

        <FiltersSection 
          onSortChange={handleSortChange} 
          onMembershipChange={handleMembershipChange} 
          onTypeChange={handleTypeChange} 
        />

        <Separator />

        <div className="group-list">
          {filtered.map((group, index) => (
            <GroupListItem group={group} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
