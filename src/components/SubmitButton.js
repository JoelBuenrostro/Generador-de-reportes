import React from 'react';

//Componentes React-Bootstrap
import Button from 'react-bootstrap/Button';

function SubmitButton() {
  return (
    <>
      <container fluid>
        <Button type='submit' variant="outline-dark" className="mb-3 mt-3 ml-3 mr-3">Guardar</Button>
      </container>
    </>
  )
}

export default SubmitButton;