import { GroupInfo } from '../shared-components/GroupInfo';
import { Separator } from '../shared-components/Separator';
import { ThreadsContainer } from '../shared-components/ThreadsContainer';
import './GroupPageContent.css';

export const GroupPageContent = ({group}) => {
  const handleAddThread = () => {
    console.log('Add thread');
  };

  const handleEdit = (id) => {
    console.log('Edit thread:', id);
  };

  const handleDelete = (id) => {
    console.log('Delete thread:', id);
  };

  let threads = [
    {
      title: "Nazwa wątku",
      users: false
    },
    {
      title: "Nazwa wątku",
      users: false    },
    {
      title: "Nazwa wątku",
      users: false    },
    {
      title: "Nazwa wątku",
      users: false    }
  ]

  return (
    <div className="group-page">
      <GroupInfo 
        groupName={group.name}
        description={group.description}
        groupImage={group.groupPicture}
        onAddThread={handleAddThread}
      />

      <Separator />

      <div className="activity-title-container">
        <h2 className="activity-title">Aktywności</h2>
      </div>

      <ThreadsContainer 
        onEdit={handleEdit}
        onDelete={handleDelete}
        threads={threads}
      />
    </div>
  );
};
