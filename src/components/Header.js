import React from 'react'

//Componentes React-Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



function Header() {
  return (
    <>
      <Container fluid>
        <Row className="mb-3 mt-3 text-center">
          <Col><h1>Generador de reportes</h1></Col>
        </Row>
      </Container>
    </>
  )
}

export default Header;