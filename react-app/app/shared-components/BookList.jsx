import './BookList.css';

export const BookList = ({ books = [] }) => {
  return (
    <div className="books-section">
      <h2 className="books-title">Moje cele</h2>
      <div className="books-container">
        {books.map((book, index) => (
          <div key={index} className="book-item">
            <div className="book-image">
              <img src={book.imageUrl} alt={book.title} className="book-cover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



/*
export const BookList = ({ books = [] }) => {
  return (
    <div className="book-list-container">
      <h1 className="book-list-title">Moja lista książek</h1>
      <div className="books-grid">
          {books.map((book, index) => (
            <div key={index} className="book-item">
              <div className="book-image">
                <img 
                  src={book.imageUrl} 
                  alt={book.title} 
                  className="book-cover"
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

BookList.defaultProps = {

};
*/