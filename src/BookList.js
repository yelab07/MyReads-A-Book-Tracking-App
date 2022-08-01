import React from "react";
import * as BooksAPI from "./BooksAPI";

function BookList({
  book,
  setBooks,
  title,
  imageUrl,
  authors,
  bookShelf,
  isSearching,
  setBooksInfo,
}) {
  const changeInShelf = (event) => {
    if (event.target.value !== "move") {
      BooksAPI.update(book, event.target.value).then((response) =>
        BooksAPI.getAll().then((newBooks) => {
          setBooksInfo(newBooks);
        })
      );
    }
  };
  const changeInSearchShelf = (event) => {
    if (event.target.value !== "move") {
      BooksAPI.update(book, event.target.value);
    }
  };

  return (
    <div>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url('${imageUrl})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              onChange={(event) => {
                // event.preventDefault();
                if (!isSearching) {
                  changeInShelf(event);
                } else {
                  changeInSearchShelf(event);
                }
                console.log(bookShelf);
              }}
              defaultValue={bookShelf}
            >
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    </div>
  );
}

export default BookList;
