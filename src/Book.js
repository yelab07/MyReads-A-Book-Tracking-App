import React from "react";
import BookList from "./BookList";

function Book({ booksInfo, setBooksInfo }) {
  // console.log(booksInfo.authors);
  return (
    <>
      {booksInfo.map((item, index) => {
        return (
          <BookList
            key={index}
            title={item.title}
            authors={item.authors}
            imageUrl={item.imageLinks && item.imageLinks.thumbnail}
            bookshelf={item.shelf}
            book={item}
            setBooksInfo={setBooksInfo}
          />
        );
      })}
    </>
  );
}

export default Book;
