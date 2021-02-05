import React from "react";
import styled, { css } from "styled-components";
import "./Nav.module.css";
import { Link } from "react-router-dom";
import { menuData } from "./data/MenuData";
import { Button } from "./Button";

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  width: 100%;
  position: fixed;
  z-index: 100;
  background: #000;
`;

const NavLink = css`
  color: #fff;
  diplay: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const Logo = styled(Link)`
  ${NavLink}
  color: #fff;
  font-style: italic;
`;

const MenuBars = styled.i``;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;
const NavMenuLink = styled(Link)`
  ${NavLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
`;

export default function Navbar() {
  return (
    <>
      <Nav>
        <Logo to="/">Elixer</Logo>
        <MenuBars />
        <NavMenu>
          {menuData.map((item, index) => {
            return (
              <NavMenuLink to={item.link} key={index}>
                {item.title}
              </NavMenuLink>
            );
          })}
        </NavMenu>
        <NavBtn>
          <Button to="/contact">contact me</Button>
        </NavBtn>
      </Nav>
    </>
  );
}
