import React from 'react'

function Samples() {
  return (
    <form style={sampleForm}>
      <div style={sampleFormRow}>
        <label style={sampleFormInput} for="name">ID: </label>
        <input style={sampleFormInput} type="text"></input>
      </div>
      <div style={sampleFormRow}>
        <label style={sampleFormInput} for="name">Modelo: </label>
        <input style={sampleFormInput} type="text"></input>
      </div>
      
    </form>
  )
}

//Estilos
const sampleForm = {
  display: "flex",
  fontSize: '22px',
  //border: 'solid',
}

const sampleFormRow = {
  display: "table-row"
}

const sampleFormInput = {
  display: "table-cell",
  marginBottom: "10px",
  paddingRight: "10px"
}

export default Samples