import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import BookList from "./BookList";

function Search() {
  const [books, setBooks] = useState([]);
  const [caracterTyped, setCaracterTyped] = useState("");

  const handleChange = (e) => {
    e.preventDefault();

    setCaracterTyped(e.target.value);
  };
  console.log(caracterTyped);

  const getBook = async (e) => {
    if (caracterTyped.length !== 0) {
      await BooksAPI.search(caracterTyped).then((zBooks) => {
        if (!zBooks.error) {
          BooksAPI.getAll().then((bookRes) => {
            setBooks(setShelves(zBooks, bookRes));
          });
        } else {
          setBooks([]);
        }
      });
    } else if (caracterTyped.length === 0) {
      setBooks([]);
    }
  };

  console.log(books);
  const setShelves = (zBooks, bookRes) => {
    return zBooks.map((book) => {
      for (let i = 0; i < bookRes.length; i++) {
        if (bookRes[i].id === book.id) {
          return { ...book, shelf: bookRes[i].shelf };
        }
      }
      return { ...book, shelf: "none" };
    });
  };
  useEffect(() => {
    getBook(caracterTyped);
  }, [caracterTyped]);
  return (
    <div>
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              onChange={handleChange}
              placeholder="Search by title, author, or ISBN"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books &&
              books.map((item, index) => (
                <BookList
                  key={index}
                  title={item.title}
                  authors={item.authors}
                  imageUrl={item.imageLinks && item.imageLinks.thumbnail}
                  bookshelf={item.shelf}
                  book={item}
                  isSearching
                />
              ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Search;
