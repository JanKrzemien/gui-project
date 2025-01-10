import './ThreadsContainer.css';

export const ThreadsContainer = ({ threads = [
  {
    id: 1,
    title: "Nazwa wątku",
    threadImage: "https://dashboard.codeparrot.ai/api/assets/Z4FsC8s5D--WlqKH",
    icons: {
      thumbsUp: "https://dashboard.codeparrot.ai/api/assets/Z4FsC8s5D--WlqKI",
      thumbsDown: "https://dashboard.codeparrot.ai/api/assets/Z4FsC8s5D--WlqKJ",
      award: "https://dashboard.codeparrot.ai/api/assets/Z4FsC8s5D--WlqKK",
      chat: "https://dashboard.codeparrot.ai/api/assets/Z4FsC8s5D--WlqKL",
      upload: "https://dashboard.codeparrot.ai/api/assets/Z4FsC8s5D--WlqKM"
    }
  },
  {
    id: 2,
    title: "Nazwa wątku",
    threadImage: "https://dashboard.codeparrot.ai/api/assets/Z4FsC8s5D--WlqKN",
    icons: {
      thumbsUp: "https://dashboard.codeparrot.ai/api/assets/Z4FsC8s5D--WlqKO",
      thumbsDown: "https://dashboard.codeparrot.ai/api/assets/Z4FsC8s5D--WlqKP",
      award: "https://dashboard.codeparrot.ai/api/assets/Z4FsC8s5D--WlqKQ",
      chat: "https://dashboard.codeparrot.ai/api/assets/Z4FsC8s5D--WlqKR",
      upload: "https://dashboard.codeparrot.ai/api/assets/Z4FsC8s5D--WlqKS"
    }
  },
  {
    id: 3,
    title: "Nazwa wątku",
    threadImage: "https://dashboard.codeparrot.ai/api/assets/Z4FsC8s5D--WlqKT",
    icons: {
      thumbsUp: "https://dashboard.codeparrot.ai/api/assets/Z4FsC8s5D--WlqKU",
      thumbsDown: "https://dashboard.codeparrot.ai/api/assets/Z4FsC8s5D--WlqKV",
      award: "https://dashboard.codeparrot.ai/api/assets/Z4FsC8s5D--WlqKW",
      chat: "https://dashboard.codeparrot.ai/api/assets/Z4FsC8s5D--WlqKX",
      upload: "https://dashboard.codeparrot.ai/api/assets/Z4FsDMs5D--WlqKY"
    }
  },
  {
    id: 4,
    title: "Nazwa wątku",
    threadImage: "https://dashboard.codeparrot.ai/api/assets/Z4FsDMs5D--WlqKZ",
    icons: {
      thumbsUp: "https://dashboard.codeparrot.ai/api/assets/Z4FsDMs5D--WlqKa",
      thumbsDown: "https://dashboard.codeparrot.ai/api/assets/Z4FsDMs5D--WlqKb",
      award: "https://dashboard.codeparrot.ai/api/assets/Z4FsDMs5D--WlqKc",
      chat: "https://dashboard.codeparrot.ai/api/assets/Z4FsDMs5D--WlqKd",
      upload: "https://dashboard.codeparrot.ai/api/assets/Z4FsDMs5D--WlqKe"
    }
  }
], onEdit = () => {}, onDelete = () => {} }) => {
  return (
    <div className="threads-container">
      {threads.map((thread) => (
        <div key={thread.id} className="thread">
          <div className="thread-picture">
            <img src={thread.threadImage} alt="Thread" />
          </div>
          <div className="thread-content">
            <div className="title-container">
              <h2>{thread.title}</h2>
            </div>
            <div className="icon-container">
              <button className="icon-button">
                <img src={thread.icons.thumbsUp} alt="Thumbs up" />
              </button>
              <button className="icon-button">
                <img src={thread.icons.thumbsDown} alt="Thumbs down" />
              </button>
              <button className="icon-button">
                <img src={thread.icons.award} alt="Award" />
              </button>
              <button className="icon-button">
                <img src={thread.icons.chat} alt="Chat" />
              </button>
              <button className="icon-button">
                <img src={thread.icons.upload} alt="Upload" />
              </button>
            </div>
          </div>
          <div className="action-buttons">
            <button className="edit-btn" onClick={() => onEdit(thread.id)}>Edytuj</button>
            <button className="delete-btn" onClick={() => onDelete(thread.id)}>Usuń</button>
          </div>
        </div>
      ))}
    </div>
  );
};
