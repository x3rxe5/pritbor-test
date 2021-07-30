import React from "react";
import { connect,styled } from "frontity";
import { Navbar,Container,Nav,NavDropdown } from "react-bootstrap";
import Link from "@frontity/components/link";

const NavBar = ({ state }) => {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Pritbor</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                {/*  */}
              </Nav>
              <Nav>
                <Nav.Link href="/FirstPage">first</Nav.Link>
                <Nav.Link href="/price">Pricing</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
}



export default connect(NavBar);