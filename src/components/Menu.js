import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'

export const Menu = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">DJ from JC :)</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Videos</Nav.Link>
                            <Nav.Link href="#pricing">Merca</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Tik-Tok</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                FaceChot
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
