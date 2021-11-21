import React from 'react'

//Componentes
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

function Table() {
  return (
    <MDBTable responsive>
      <MDBTableHead dark>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Muestra</th>
          <th scope='col'>Modelo</th>
          <th scope='col'>Provedor</th>
          <th scope='col'>Aceleracion(G's)</th>
          <th scope='col'>Tiempo(msec)</th>
          <th scope='col'>Filtro</th>
          <th scope='col'>Velocidad Maxima</th>
          <th scope='col'>Velocidad Minima</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <th scope='row'>1</th>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
        </tr>
        <tr>
          <th scope='row'>2</th>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
        </tr>
        <tr>
          <th scope='row'>3</th>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
        </tr>
        <tr>
          <th scope='row'>4</th>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
        </tr>
        <tr>
          <th scope='row'>5</th>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
        </tr>
        <tr>
          <th scope='row'>6</th>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
        </tr>
        <tr>
          <th scope='row'>7</th>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
        </tr>
        <tr>
          <th scope='row'>8</th>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
        </tr>
        <tr>
          <th scope='row'>9</th>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
        </tr>
        <tr>
          <th scope='row'>10</th>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
          <td>datos</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
}

export default Table
