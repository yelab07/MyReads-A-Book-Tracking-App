import React from "react";
import Book from "./Book";
const catagories = ["Currently Reading", "Want to Read", "Read"];
function BookShelf() {
  return (
    <div>
      <div className="bookshelf">
        {catagories.map((item, index) => (
          <div key={index}>
            <h2 className="bookshelf-title">{item}</h2>

            <div className="bookshelf-books">
              <ol className="books-grid">
                <Book />
                <Book />
              </ol>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookShelf;
