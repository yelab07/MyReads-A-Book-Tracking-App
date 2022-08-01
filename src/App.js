import "./App.css";
import React, { useState, useEffect } from "react";
import Home from "./Home";
import Search from "./Search";
import * as BooksAPI from "./BooksAPI";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
export const ThemeContext = React.createContext();
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [booksInfo, setBooksInfo] = useState([]);
  const styles = {
    containerStyles: {
      backgroundColor: darkMode === true ? "black" : "white",
    },
  };
  // console.log(booksInfo);
  useEffect(() => {
    const getBookInfo = async () => {
      const res = await BooksAPI.getAll();
      setBooksInfo(res);
    };
    getBookInfo();
  }, []);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div style={styles.containerStyles}>
        <Navbar />

        <Routes>
          <Route
            exact
            path="/"
            element={<Home booksInfo={booksInfo} setBooksInfo={setBooksInfo} />}
          />
          <Route
            path="/search"
            element={<Search booksInfo={booksInfo} forceRefresh={true} />}
          />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
