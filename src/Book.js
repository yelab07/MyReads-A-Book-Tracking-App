import React from "react";
import BookList from "./BookList";

function Book({ booksInfo, setBooksInfo }) {
  // console.log(booksInfo.authors);
  return (
    <>
      {booksInfo &&
        booksInfo.map((item, index) => (
          <li key={index}>
            <BookList
              title={item.title}
              authors={item.authors}
              imageUrl={item.imageLinks && item.imageLinks.thumbnail}
              bookShelf={item.shelf}
              book={item}
              setBooksInfo={setBooksInfo}
            />
          </li>
        ))}
    </>
  );
}

export default Book;
