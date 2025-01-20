import './GroupInfo.css';
import { ContainedButton } from './Buttons';
import { useState } from 'react';

export const GroupInfo = ({ 
  groupName,
  description,
  groupImage,
  onAddThread = () => {}
}) => {
  const [btnText, setBtnText] = useState('Dołącz')

  const onJoin = () => {
    setBtnText("Jesteś członkiem")
  }

  return (
    <div className="group-info">
      <div className="group-picture">
        <img src={groupImage} alt="Group" />
      </div>
      <div className="group-details">
        <div className="group-name">
          {groupName}
        </div>
        <div className="group-description">
          {description}
        </div>
        <div className="group-actions">
          <ContainedButton text="Dodaj wątek" onClick={onAddThread}/>
          <ContainedButton text={btnText} onClick={onJoin}/>
        </div>
      </div>
    </div>
  );
};
