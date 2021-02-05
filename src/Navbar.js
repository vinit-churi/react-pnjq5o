import React from "react";
import styled, { css } from "styled-components";
import "./Nav.module.css";
import { Link } from "react-router-dom";
import { menuData } from "./data/MenuData";
import { Button } from "./Button";
import { faBars } from "react-icons/fa";
import { CgMenuRight } from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
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
  background: red;
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

const MenuBars = styled.i`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    background-color: black;
    background-image: url(${faBars});
    background-size: contain;
    height: 40px;
    widht: 40px;
    cursor: pointer;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const NavMenuLink = styled(Link)`
  ${NavLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
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
          <Button to="/contact" primary="true">
            contact me
          </Button>
        </NavBtn>
        <CgMenuRight/>
        <FaTwitter/>
      </Nav>
    </>
  );
}
