import React from "react";
import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";

function Home({ booksInfo, setBooksInfo }) {
  return (
    <div>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        {/* <Home booksInfo={booksInfo} /> */}
        <div className="list-books-content">
          <div>
            <BookShelf booksInfo={booksInfo} setBooksInfo={setBooksInfo} />
          </div>
        </div>
        <div className="open-search">
          <Link
            to="/search"
            //  onClick={() => setShowSearchpage(!showSearchPage)}
          >
            Add a book
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
