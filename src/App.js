import "./App.css";
import { useState, useEffect } from "react";
import Home from "./Home";
import Search from "./Search";
import * as BooksAPI from "./BooksAPI";
import { Route, Routes } from "react-router-dom";
function App() {
  const [booksInfo, setBooksInfo] = useState([]);
  const [currentReading, setCurrentRead] = useState([]);
  const [wantToRead, setWantToRead] = useState([]);
  const [read, setRead] = useState([]);

  console.log(booksInfo);
  useEffect(() => {
    const getBookInfo = async () => {
      const res = await BooksAPI.getAll();
      setBooksInfo(res);
    };
    getBookInfo();
  }, []);

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<Home booksInfo={booksInfo} setBooksInfo={setBooksInfo} />}
      />
      <Route path="/search" element={<Search booksInfo={booksInfo} />} />
    </Routes>
  );
}

export default App;
