import React, { useContext } from "react";
import { ThemeContext } from "../../App";

const Toggle = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const styles = {
    toggleContainer: {
      display: "flex",
      alignItems: "center",
      height: "35px",
      width: "85px",
      backgroundColor: darkMode === true ? "#15cdfc" : "#15cdfc",
      marginRight: "20px",
      borderRadius: "25px",
    },

    toggleInner: {
      transition: "margin-left .2s ease-in-out",
      cursor: "pointer",
      height: "35px",
      width: "35px",
      backgroundColor: "grey",
      borderRadius: "100%",
      marginLeft: darkMode === true ? "50px" : "0px",
      // display: "flex",
      // alignItems: "center",
      // justifyContent: "center",
    },
  };

  return (
    <div style={styles.toggleContainer}>
      <div
        onClick={() => setDarkMode(!darkMode)}
        style={styles.toggleInner}
      ></div>
    </div>
  );
};

export default Toggle;
