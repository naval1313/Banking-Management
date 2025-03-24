import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./IMAGES/logoimg.png"
import { Link,Outlet } from 'react-router-dom';

import { BsSearch } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import Footer from './COMPONENTS/Footer';

const Header = () => {

  let name =localStorage.getItem("name");

// name email phone pass acctype

  return (
    <div>
      <Navbar data-bs-theme="dark" id="navbar">
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
            <Nav.Link as={Link} to="/home" style={{ color: "white" }}>
              LogOut
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <h1 id="dashboard">WELCOME TO DASHBOARD PAGE</h1>
      <h2 id="dashuser">Mr. {name}</h2>
      <div className="dash">
        <ul id="dashitems" style={{listStyle:"none"}}>
          <li>
            <Link to="myacc"> MY ACCOUNT</Link>
          </li>
          <li>
            <Link to="depo"> DEPOSITE</Link>
          </li>
          <li>
            <Link to="resetpass"> RESET PASSWORD</Link>
          </li>
          <li>
            <Link to="withdrawl"> WITHDRAWAL</Link>
          </li>
          <li>
            <Link to="currbalance"> CURR. BALANCE</Link>
          </li>
        </ul>
      </div>
      <Outlet />

      <Footer />
    </div>
  );
}

export default Header
