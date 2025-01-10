import './GroupListItem.css';

export const GroupListItem = ({ 
  groupName = 'Group-name',
  description = 'Group description',
  lastActive = '2 hours ago',
  groupImage = 'https://dashboard.codeparrot.ai/api/assets/Z4F1YAIBBLnlud8C',
  onJoin = () => {}
}) => {
  return (
    <div className="group-list-item">
      <div className="container">
        <div className="image-container">
          <img src={groupImage} alt="Group" className="group-icon" />
        </div>
        
        <div className="content-container">
          <div className="text-container">
            <h3 className="group-name">{groupName}</h3>
            <p className="group-description">{description}</p>
          </div>
        </div>

        <div className="meta-container">
          <span className="last-active">Last active: {lastActive}</span>
          <button className="join-button" onClick={onJoin}>
            Join
          </button>
        </div>
      </div>
    </div>
  );
};
