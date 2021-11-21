import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <>
      <MDBFooter bgColor='dark' className='text-white text-center'>
        <MDBContainer className='p-4'>
          <MDBRow>
            <MDBCol>
              <h5 className='text-uppercase'>Generador de reportes</h5>

              <p>
                Sistema generador de reportes para seguimiento de pruebas de investigación.
              </p>

            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          &copy; {new Date().getFullYear()} Hecho por:{' '}
          <a className='text-white' href='https://github.com/JoelBuenrostro'>
            Joel Buenrostro
          </a>
          <p>Con la libreria de React 🖥</p>
        </div>

      </MDBFooter>
    </>
  );
}

export default Footer;