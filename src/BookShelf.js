import React from "react";
import Book from "./Book";
const catagories = [
  { shelfName: "currentlyReading", shelfTitle: "Currently Reading" },
  { shelfName: "wantToRead", shelfTitle: "Want to Read" },
  { shelfName: "read", shelfTitle: "Read" },
];

function BookShelf({ booksInfo, setBooksInfo }) {
  return (
    <div>
      <div className="bookshelf">
        {catagories.map((item, index) => (
          <div key={index}>
            <h2 className="bookshelf-title">{item.shelfTitle}</h2>

            <div className="bookshelf-books">
              <ol className="books-grid">
                <Book
                  setBooksInfo={setBooksInfo}
                  booksInfo={booksInfo.filter(
                    (book) => book && book.shelf === item.shelfName
                  )}
                />
              </ol>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookShelf;
