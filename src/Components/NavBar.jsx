import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import logo from '../Assets/logo1.png';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'
import { Link } from 'react-router-dom';
import { NavLink, useLocation } from 'react-router-dom'
import {TfiHeadphoneAlt} from 'react-icons/tfi'
import { BsFillPersonVcardFill } from "react-icons/bs";

import {BiLogIn} from 'react-icons/bi'

function NavBar() {

  const [toggle, SetToggle] = useState(false);
  const token = localStorage.getItem("token");

  const ToggleClick = () => {
    SetToggle(!toggle);
  };
  return (
    <Navbar variant="light" expand="md" className='NavBar'>
      <Container fluid >

        <Navbar.Brand href="/">
          <img src={logo} height="60" className="d-inline-block align-top ps-3" alt="Logo" />
        </Navbar.Brand>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="basic-navbar-nav"
          aria-expanded={toggle}
          aria-label="Toogle The NavBar"
          onClick={ToggleClick}
        >
          <span > {toggle ? <MdClose /> : <FaBars />}</span>
        </button>

        <Navbar.Collapse id="basic-navbar-nav" className={toggle ? 'show' : ''}>
          <Nav className="ms-auto  ">
            <NavLink exact to={"/"}> <Nav.Link className='text-dark text-bold' >EventSpot</Nav.Link>
            </NavLink> </Nav>
          <Nav className="ms-auto ">
            <Nav >
              <NavLink className='text-dark text-bold ms-3 me-4 my-auto FrontNavBarItem' exact to={"/Contact"}> <TfiHeadphoneAlt className='me-1'/> Contact-Us
              </NavLink>
            </Nav>
            <Nav >
              <NavLink className='text-dark text-bold ms-3 me-4 my-auto FrontNavBarItem' exact to={"/About"}> <BsFillPersonVcardFill className='me-1'/> About-Us
              </NavLink>
            </Nav>
            <Nav >
              <Nav.Link className='text-dark text-bold ms-3 me-4 my-auto FrontNavBarItem' href="/admin/login"><BiLogIn className='me-1' /> Login
              </Nav.Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>



      </Container>
    </Navbar>
  );
}

export default NavBar;