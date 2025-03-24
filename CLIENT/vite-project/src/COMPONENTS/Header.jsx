import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { BsSearch } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>

      <Navbar  data-bs-theme="dark"  id="navbar">
        <Container>
          <Navbar.Brand href="#home" id="title">
          <h3 id="hlogo">Banker.</h3>
          </Navbar.Brand>
          <Nav className="me-auto" id="navitem">
            <Nav.Link as={Link} to="home" style={{ color: "white" }}>
              Home
            </Nav.Link>

            <Nav.Link href="#features" style={{ color: "white" }}>
              Accounts
            </Nav.Link>
            <Nav.Link href="#pricing" style={{ color: "white" }}>
            Investments & Deposits
            </Nav.Link>
            <Nav.Link as={Link} to="ragistration" style={{ color: "white" }}>
              SignUp
            </Nav.Link>
            <Nav.Link as={Link} to="login" style={{ color: "white" }}>
              Login
            </Nav.Link>
          </Nav>
          {/* <BsSearch 
            style={{ margin: "20", cursor: "pointer"}}
            color="black"
            size={24}
          /> */}
          {/* <BsPerson color="black" size={28} style={{ cursor: "pointer" }} /> */}
        </Container>
      </Navbar>
    </div>
  );
}

export default Header
