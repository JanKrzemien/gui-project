import { GroupInfo } from '../shared-components/GroupInfo';
import { ActivitySection } from '../shared-components/ActivitySection';
import { ThreadsContainer } from '../shared-components/ThreadsContainer';
import './GroupPageContent.css';

export const GroupPageContent = () => {
  const handleSearch = (query) => {
    console.log('Search:', query);
  };

  const handleCategoryChange = (event) => {
    console.log('Category changed:', event.target.value);
  };

  const handleAddThread = () => {
    console.log('Add thread');
  };

  const handleJoin = () => {
    console.log('Join group');
  };

  const handleEdit = (id) => {
    console.log('Edit thread:', id);
  };

  const handleDelete = (id) => {
    console.log('Delete thread:', id);
  };

  return (
    <div className="group-page">
      <GroupInfo 
        groupName="Nazwa grupy"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis sodales purus, eget tempus dolor luctus et. Proin eget dolor quis neque fringilla auctor eget in felis. Sed finibus sapien eu nibh vestibulum suscipit. Aliquam erat volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur luctus augue nisi, at aliquet diam laoreet ut. Donec rutrum magna porta enim gravida ornare. Suspendisse potenti. Donec consequat augue tincidunt nulla vestibulum gravida."
        onAddThread={handleAddThread}
        onJoin={handleJoin}
      />
      <ActivitySection title="Aktywność" />
      <ThreadsContainer 
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};
