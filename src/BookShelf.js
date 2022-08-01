import React from "react";
import Book from "./Book";

function BookShelf({ booksInfo, setBooksInfo, item }) {
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{item.shelfTitle}</h2>

        <div className="bookshelf-books">
          <ol className="books-grid">
            <Book setBooksInfo={setBooksInfo} booksInfo={booksInfo} />
          </ol>
        </div>
      </div>
    </div>
  );
}

export default BookShelf;
