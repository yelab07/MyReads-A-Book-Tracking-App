import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  height: 70px;
  width: 100%;
  justify-content: space-between;
  display: flex;
  align-items: "center";
  background-color: #131921;
  position: fixed;
  top: 0;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  margin-top: 20px;

  align-items: center;
  margin-right: 24px;
  margin-left: 24px;
  height: 23.2px;
  justify-content: center;
`;
