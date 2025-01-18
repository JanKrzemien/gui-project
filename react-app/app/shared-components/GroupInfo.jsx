import './GroupInfo.css';
import { ContainedButton } from './Buttons';

export const GroupInfo = ({ 
  groupName = "Nazwa grupy",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis sodales purus, eget tempus dolor luctus et. Proin eget dolor quis neque fringilla auctor eget in felis. Sed finibus sapien eu nibh vestibulum suscipit. Aliquam erat volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur luctus augue nisi, at aliquet diam laoreet ut. Donec rutrum magna porta enim gravida ornare. Suspendisse potenti. Donec consequat augue tincidunt nulla vestibulum gravida.",
  groupImage = "https://dashboard.codeparrot.ai/api/assets/Z4Fr-Ms5D--WlqKF",
  onAddThread = () => {},
  onJoin = () => {}
}) => {
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
          <ContainedButton text="Dołącz" onClick={onJoin}/>
        </div>
      </div>
    </div>
  );
};
