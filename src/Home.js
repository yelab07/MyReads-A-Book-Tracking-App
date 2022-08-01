import React, { useEffect } from "react";
import BookShelf from "./BookShelf";
import * as BooksAPI from "./BooksAPI";

import { Link } from "react-router-dom";
const catagories = [
  { shelfName: "currentlyReading", shelfTitle: "Currently Reading" },
  { shelfName: "wantToRead", shelfTitle: "Want to Read" },
  { shelfName: "read", shelfTitle: "Read" },
];
function Home({ booksInfo, setBooksInfo }) {
  useEffect(() => {
    const getBookInfo = async () => {
      const res = await BooksAPI.getAll();
      setBooksInfo(res);
    };
    getBookInfo();
  }, []);

  return (
    <div>
      <div className="list-books">
        <div className="list-books-content">
          <div>
            {catagories.map((item, index) => (
              <BookShelf
                key={index}
                item={item}
                booksInfo={
                  booksInfo &&
                  booksInfo.filter(
                    (books) => books && books.shelf === item.shelfName
                  )
                }
                setBooksInfo={setBooksInfo}
              />
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
