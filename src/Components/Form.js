import React from 'react'

function Form() {
  return (
    <form style={userForm}>
      <p>Agrega tu nombre</p>
      <div style={userFormRow}>
        <label style={userFormInput} for="name">Nombre: </label>
        <input style={userFormInput} type="text"></input>
      </div>
      <div style={userFormRow}>
        <label style={userFormInput} for="name">Apellido: </label>
        <input style={userFormInput} type="text"></input>
      </div>
      <div style={userFormRow}>
        <input style={userFormInput} type="submit" value="Agregar"></input>
      </div>
    </form>
  )
}

//Estilos
const userForm = {
  display: "table",
  fontSize: '22px',
  //border: 'solid',
}

const userFormRow = {
  display: "table-row"
}

const userFormInput = {
  display: "table-cell",
  marginBottom: "10px",
  paddingRight: "10px"
}

export default Form