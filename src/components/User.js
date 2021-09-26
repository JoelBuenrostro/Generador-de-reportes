import React from 'react'

//Componentes React-Bootstrap
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function User() {
  return (
    <>
      <Container>
        <Form>
          <Row className="mb-3 mt-3">
            <Col>
              <Form.Control placeholder="Nombre" />
            </Col>
            <Col>
              <Form.Control placeholder="Apellido" />
           </Col>
          </Row>
        </Form>
      </Container>
    </>
  )
}

export default User