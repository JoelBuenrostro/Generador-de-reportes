/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { MDBTypography } from 'mdb-react-ui-kit';

function CardCodigo() {
    return (
    <div className='p-5 text-center bg-light'>
        <h1 className='mb-3'>React</h1>
        <img
            src='https://www.computerworld.es/archivos/201504/github.jpg'
            className='img-fluid'
            alt=''
            height='500'
            width='600'
        />

        <MDBTypography note noteColor='dark' className='mb-0'>
        <strong> Una de las principales plataformas para crear proyectos abiertos de herramientas y aplicaciones </strong><br/>
        GitHub es una forja (plataforma de desarrollo colaborativo) para alojar proyectos utilizando el sistema de control de versiones Git. 
        Se utiliza principalmente para la creación de código fuente de programas de ordenador.

        </MDBTypography>
    </div>
    )
}

export default CardCodigo;