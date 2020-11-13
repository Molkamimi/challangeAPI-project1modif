import React, { useState } from "react";

import AppBar from "@material-ui/core/AppBar";
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
import { FormControl, Form } from "react-bootstrap";
import { Button } from "@material-ui/core";

const NavBar = ({ setSearch }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        expand="md"
        className="mr-3"
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "black",
        }}
      >
        <Link to="/" style={{ color: "pink" }}>
          Home
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link
                to="/about us"
                style={{
                  padding: "10%",
                  color: "pink",
                }}
              >
                {" "}
                Aboutus
              </Link>
            </NavItem>
          </Nav>

          <NavbarText>
            <Button
              style={{
                fontSize: "medium",
                color: "black",
                fontStyle: "italic",
                backgroundColor: "pink",
              }}
            >
              <div
                className="btn btn-primary px-5"
                style={{ color: "black", borderColor: "black" }}
              >
                DrinkShop{" "}
                <Form inline>
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                  />
                </Form>
              </div>
            </Button>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
