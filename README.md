# Generador de reportes

Sistema generador de reportes para seguimiento de pruebas de investigación en un laboratorio termomecanico.

Desarrollado por el Departamento de Defensa de los EE. UU., El estándar MIL-STD-810H es un estándar militar de los EE. UU. Que se centra en adaptar el diseño ambiental y los límites de prueba de un equipo militar a las condiciones en que sobrevivirá durante su vida útil. Esta norma tiene como objetivo crear métodos de prueba en la sala que repitan los efectos del medio ambiente en el equipo en lugar de imitar las condiciones ambientales. Por otro lado, este estándar está especialmente preparado para aplicaciones militares, pero a menudo también se usa para productos comerciales.

## Tabla de contenido

- [Proposito](#Proposito)
- [React](#React)
- [Scripts Disponibles](#Scripts_disponibles)
  - [npm start](#npm_start)
  - [npm test](#npm_test)
  - [npm run build](#npm_run_build)
- [React-Bootstrap](#React-Bootstrap)
- [Hospedaje](#Hospedaje)
  - [Sitio web](#Sitio_web)
  - [Placa de estatus](#Placa_de_estatus)
- [Licencia](#Licencia)

## Proposito

Digitalizar un reporte de pruebas bajo el estándar MIL-STD-810H para resolver problemas de ingeniería ambiental y pruebas de laboratorio con una amplia gama de condiciones ambientales que incluyen:

- Baja presión para pruebas de altitud
- Choque de temperatura adicional a temperaturas altas y bajas en almacenes y durante el uso
- Efectos de la lluvia incluido el viento que sopla y la lluvia helada
- Humedad, hongos y niebla salina para pruebas de óxido
- Exposición a arena y polvo
- Atmósfera explosiva y fugas
- Aceleración
- Choque y transporte de choque
- Vibración

## React

React es una libreria de Javascript de codigo abierto creada por Facebook, es usada para crear interfaces de ususario usando el modelo vista controlador (MVC).
Uno de los aspectos mas importantes de React son los componentes, estos son elementos HTML reusables para construir interfaces rapidamente.

- Documentacion en español: <https://es.reactjs.org/>

- Codigo fuente en GitHub: <https://github.com/facebook/react/>

Este proyecto fue creado con [Create React App](https://github.com/facebook/create-react-app).

## Scripts Disponibles

En el directorio raiz se pueden correr los comandos:

### npm start

Corre la aplicacion en modod desarrollador.
Abre [http://localhost:3000](http://localhost:3000) para verla en el navegador. La pagina se refrescara cada vez que se haga una modificacion.

### npm test

Lanza el test runner en modo de vista interactivo.
Para mas informacion visita [running tests](https://facebook.github.io/create-react-app/docs/running-tests).

### npm run build

Construye la aplicacion para produccion en la carpeta `build`
Optimiza la construccion de React correctamente y la optimiza para el mejor rendimiento. La aplicacion estara lista para desplegar.

Mas informacion en [deployment](https://facebook.github.io/create-react-app/docs/deployment).

## React-Bootstrap

React-Boostrap reemplaza el CDNde Bootstrap original. Cada componente ha sido construido desde cero como un componente React.

<https://github.com/react-bootstrap/react-bootstrap>

## Hospedaje

Netlify es una plataforma para desarrollo web que multiplica la productividad. Esta plataforma nos permite hospedar proyectos personales, sitios de hobby o expewrimentos de manera gratuita. Millones de desarrolladores usan Netlify para simplificar sus flujos de trabajo y escalar sus proyectos sin esfuerzo.

Video de demostracion:
<https://www.netlify.com/v3/video/homepage-demo-v3-optimized.mp4>

### Sitio web

El generador puede ser accesado desde <https://generador-de-reportes.netlify.app/> para ver los cambios en tiempo real.

### Placa de estatus

[![Netlify Status](https://api.netlify.com/api/v1/badges/f8837433-47ec-4070-803a-3726d996b7d9/deploy-status)](https://app.netlify.com/sites/generador-de-reportes/deploys)

## Licencia

Este proyecto es de codigo libre bajo la licencia MIT.
