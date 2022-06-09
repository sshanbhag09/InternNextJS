import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, NavItem } from "react-bootstrap";
import style from "../styles/Navbar.module.css"
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setSticky(true);
    } else if (window.scrollY < 90) {
      setSticky(false);
    }
  };

  return (
    <>
    <div className={`header${sticky ? " sticky" : ""}`}>
      <Navbar bg="dark" variant="dark" expand="md" fixed="top">
        <Container fluid="lg">
          <Navbar.Brand href="/" className={style.Logo}>My Interests</Navbar.Brand>
          
          <Navbar.Toggle onClick={toggle} />

          <Navbar.Collapse id="basic-navbar-nav" isOpen={isOpen}>
            <Nav className="m-auto" navbar>
              <NavItem>
                <Nav.Link href="/">Home</Nav.Link>
              </NavItem>
              <NavItem >
                <Nav.Link href="#feature">Contact</Nav.Link>
              </NavItem>
              <NavItem >
                <Nav.Link href="#service">Information</Nav.Link>
              </NavItem>
              <NavItem >
                <Nav.Link href="#about">About me</Nav.Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    </>
  );
};

export default Header;
