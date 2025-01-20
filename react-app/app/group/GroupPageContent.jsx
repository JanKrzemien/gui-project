import { GroupInfo } from '../shared-components/GroupInfo';
import { Separator } from '../shared-components/Separator';
import { ThreadsContainer } from '../shared-components/ThreadsContainer';
import { ContainedButton } from '../shared-components/Buttons';
import './GroupPageContent.css';
import '../shared-components/ReviewSection.css';
import { useEffect, useState } from 'react';

export const GroupPageContent = ({group}) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [threads, setThreads] = useState([
    {
      title: "Nazwa wątku",
      users: false
    },
    {
      title: "Nazwa wątku",
      users: false
    },
    {
      title: "Nazwa wątku",
      users: false
    },
    {
      title: "Nazwa wątku",
      users: false
    }
  ])

  const handleAddThread = () => {
    document.getElementsByClassName('overlay')[0].style.display = 'flex'
  };

  const handleEdit = (id) => {
    console.log('Edit thread:', id);
  };

  const handleDelete = (id) => {
    setThreads(threads.filter((thread, index) => index != id))
  };

  useEffect(() => {
    console.log(threads)
  }, [threads])

  const onCancel = () => {
    setTitle('')
    setDescription('')
    document.getElementsByClassName('overlay')[0].style.display = 'none'
  }

  const onSubmit = () => {
    setThreads([...threads, {title: title, users: true}])
    onCancel()
  }

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


      <div className="overlay">
        <div className='thread-form-container'>
          <div className="review-input-section">
            <label className="text-label">Tytuł wątku</label>
            <div className="textarea-container">
              <textarea
                className="review-textarea"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Tekst..."
              />
              <label className="floating-label">Tytuł</label>
            </div>
          </div>

          <div className="review-input-section">
            <label className="text-label">Opis</label>
            <div className="textarea-container">
              <textarea
                className="review-textarea"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Tekst..."
              />
              <label className="floating-label">Treść</label>
            </div>
          </div>

          <div className="button-container">
            <ContainedButton text={'Anuluj'} onClick={onCancel}/>
            <ContainedButton text={'Opublikuj'} onClick={onSubmit}/>
          </div>
        </div>
      </div>
    </div>
  );
};
