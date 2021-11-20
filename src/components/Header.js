import React from 'react'

//Componentes React-Bootstrap
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'


function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Generador de reportes</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header;