/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { MDBTypography } from 'mdb-react-ui-kit';

function CardSistema() {
    return (
    <div className='p-5 text-center bg-light'>
        <h1 className='mb-3'>React</h1>
        <img
            src='https://visual-engin.com/wp-content/uploads/sites/3/2016/06/reactjs-introduccion-workshop-visual-enginerring.png'
            className='img-fluid'
            alt=''
            height='500'
            width='600'
        />

        <MDBTypography note noteColor='dark' className='mb-0'>
        <strong> Una biblioteca de JavaScript para construir interfaces de usuarios </strong><br/>
        React (también llamada React.js o ReactJS) es una biblioteca Javascript de código abierto diseñada para crear interfaces de 
        usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad 
        de software libre. En el proyecto hay más de mil desarrolladores libres.
        React intenta ayudar a los desarrolladores a construir aplicaciones que usan datos que cambian todo el tiempo. Su objetivo es 
        ser sencillo, declarativo y fácil de combinar. React sólo maneja la interfaz de usuario en una aplicación; React es la Vista en 
        un contexto en el que se use el patrón MVC (Modelo-Vista-Controlador) o MVVM (Modelo-vista-modelo de vista). También puede ser 
        utilizado con las extensiones de React-based que se encargan de las partes no-UI (que no forman parte de la interfaz de usuario) 
        de una aplicación web.<br/>
        </MDBTypography>
    </div>
    )
}

export default CardSistema;