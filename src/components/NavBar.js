import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        color="light"
        light
        expand="md"
        className="mr-2"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Link to="/">Home</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/aboutus"> About us</Link>
            </NavItem>
            <NavItem>
              <Link to="/aboutus"> contact me</Link>
            </NavItem>
          </Nav>
          <NavbarText>DrinkShop</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
