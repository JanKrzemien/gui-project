import './GroupListItem.css';
import { ContainedButton } from './Buttons'
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';

export const GroupListItem = ({ 
  group
}) => {
  const navigate = useNavigate()

  const [time, setTime] = useState(Date.now())
  const [btnText, setBtnText] = useState("Dołącz")

  useEffect(() => {
    let d = new Date(group.lastActive)
    setTime(d.getMinutes())
  }, [group])

  const onJoin = () => {
    setBtnText("Jesteś członkiem")
  }

  const navigateToGroup = () => {
    navigate(`/group/${group.group_id}`)
  }

  return (
    <div className="group-list-item" onClick={navigateToGroup}>
      <div className="group-list-item-container">
        <div className="group-list-item-image-container">
          <img src={group.groupPicture} alt="Group" className="group-icon" />
        </div>
        
        <div className="content-container">
          <div className="text-container">
            <h3 className="group-name">{group.name}</h3>
            <p className="group-description">{group.description}</p>
          </div>
        </div>

        <div className="meta-container">
          <span className="last-active">Last active: { time } minutes ago</span>
          <ContainedButton text={btnText} onClick={onJoin} />
        </div>
      </div>
    </div>
  );
};
