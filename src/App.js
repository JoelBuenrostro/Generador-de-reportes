import logo from './Assets/Images/logo.svg';
import './Assets/CSS/App.css';

// Custom Components
import LoadData from './Components/LoadData';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Generador de reportes para pruebas de laboratorio
        </p>
        <a
          className="App-link"
          href="http://www.udg.mx/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Universidad de Guadalajara
        </a>
      </header>

      <h3>Datos de la prueba</h3>
      <section className="components">

          <LoadData />

        </section>

    </div>
  );
}

export default App;
