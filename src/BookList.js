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
  //   const changeInShelf = (event) => {
  //     event.target.value !== "move" && !isSearching
  //       ? BooksAPI.update(book, event.target.value).then((response) =>
  //           BooksAPI.getAll().then((newBooks) => {
  //             setBooksInfo(newBooks);
  //           })
  //         )
  //       : BooksAPI.update(book, event.target.value);
  //   };
  const changeInShelf = (event) => {
    if (event.target.value !== "move") {
      if (!isSearching) {
        BooksAPI.update(book, event.target.value).then((response) =>
          BooksAPI.getAll().then((newBooks) => {
            setBooksInfo(newBooks);
          })
        );
      } else {
        BooksAPI.update(book, event.target.value);
      }
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
                event.preventDefault();
                changeInShelf(event);
                // (event) => console.log("clicked", event)
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
