import React from 'react';
import { MDBCard, MDBCardHeader, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';

function Card() {
  return (
    <>
        <MDBCard background='dark' className='text-white' alignment='center'>
        <MDBCardHeader>Actividades realizadas en el curso UDGVirtual Proyecto II</MDBCardHeader>
        <MDBCardBody>
            <MDBCardTitle>PMI Book</MDBCardTitle>
            <MDBCardText>Conocimos el libro del PMI y so procesos para administrar proyectos</MDBCardText>

            <MDBCardTitle>Metodologia Agile SCRUM</MDBCardTitle>
            <MDBCardText>Tuvimos un acercamientpos a las metodologias agiles para desarrollo de software</MDBCardText>

            <MDBCardTitle>Product Backlog</MDBCardTitle>
            <MDBCardText>Aprendimos los principales conceptos de un product backlog dentro de la metodologia SCRUM</MDBCardText>

            <MDBCardTitle>Sprint Schedule</MDBCardTitle>
            <MDBCardText>Aprendimos a programar un sprint de acorde con los conceptos de SCRUM</MDBCardText>

            <MDBCardTitle>Fases de desarrollo</MDBCardTitle>
            <MDBCardText>Colaboramos en equipo para protagonizar los roles especificos de un equipo SCRUM (Product Owner, SCRUM Master y desarrollador)</MDBCardText>

            <MDBCardTitle>Calendarizacion de actividades</MDBCardTitle>
            <MDBCardText>Programamos reuniones semanales para experimentar el desarrollo dynamico y rapidez de las metodologias agiles</MDBCardText>

            <MDBCardTitle>Producto Final</MDBCardTitle>
            <MDBCardText>Integramos todo lo aprendido durante el semestre para realizar un proyecto y poner en practica la metodologia SCRUM</MDBCardText>
        </MDBCardBody>
        </MDBCard>
        <br />
    </>
  );
}

export default Card;