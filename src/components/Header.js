import React from 'react'

function Header() {
  return (
    <header style={formHeader}>
      <h1>Generador de reportes</h1>
    </header>
  )
}

//Estilos
const formHeader = {
  alignContent: 'center',
  alignItems: 'center',
  display: 'flex',
  fontSize: '32px',
  border: 'solid',
  borderColor: '#000',
  justifyContent: 'center'
}

export default Header;