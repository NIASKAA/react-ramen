import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Navigation = () => {
    return (
        <>
            <Navbar bg="secondary" expand="lg">
                <Container>
                    <Navbar.Brand className="navBtns" as={Link} to={'/'}>Ramen Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="navBtns" as={Link} to={'/menu'}>Menu</Nav.Link>
                        <Nav.Link className="navBtns" as={Link} to={'/hours&location'}>Hour/Location</Nav.Link>
                        <Nav.Link className="navBtns" as={Link} to={'/aboutus'}>About Us</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation
