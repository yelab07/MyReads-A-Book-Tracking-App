import React from "react";
import { Nav, NavLink, NavMenu, NavBtn } from "./NavStyles";

import Toggle from "../Toggle/Toggle";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>MyReads</h1>
        </NavLink>

        <NavBtn>
          <Toggle />
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
