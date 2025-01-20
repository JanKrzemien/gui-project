import './ThreadsContainer.css';
import { ContainedButton } from './Buttons';
import 'material-icons/iconfont/material-icons.css';

export const ThreadsContainer = ({ threads = [], onEdit = () => {}, onDelete = () => {} }) => {
  return (
    <div className="threads-container">
      {threads.map((thread, index) => (
        <div key={index} className="thread">
          <div className="thread-picture">
            <img src="/image-icon.png" alt="Thread" />
          </div>
          <div className="thread-content">
            <div className="title-container">
              <h2>{thread.title}</h2>
            </div>
            <div className="icon-container">
              <button className="icon-button">
                <img src="/thumb-up-icon.png" alt="Thumbs up" />
              </button>
              <button className="icon-button">
                <img src="/thumb-down-icon.png" alt="Thumbs down" />
              </button>
              <button className="icon-button">
                <img src="/trophy-icon.png" alt="Award" />
              </button>
              <button className="icon-button">
                <img src="/comment-icon.png" alt="Chat" />
              </button>
              <button className="icon-button">
                <img src="/upload-icon.png" alt="Upload" />
              </button>
            </div>
          </div>
          {
            thread.users ? (
              <div className="action-buttons">
                <ContainedButton text="Edytuj" onClick={() => onEdit(index)}/>
                <ContainedButton text="Usuń" onClick={() => onDelete(index)}/>
              </div>
            ) : ''
          }
        </div>
      ))}
    </div>
  );
};
