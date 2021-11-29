import React from 'react'

import { Routes, Route } from "react-router-dom";

//MDB5
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

//Componentes
import Header from './components/Header'
import HeaderNoImage from './components/HeaderNoImage';
import User from './components/User'
import Card from './components/Card'
import CardSistema from './components/CardSistema'
import CardCodigo from './components/CardCodigo'
import Table from './components/Table'
import SubmitButton from './components/SubmitButton'
import MaterialFooter from './components/Footer'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="actividades" element={<Actividades />} />
        <Route path="sistema" element={<Sistema />} />
        <Route path="codigo" element={<Codigo />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <>
      <Header />
      <User />
      <Table />
      <SubmitButton />
      <MaterialFooter />
    </>
  );
}

function Actividades() {
  return (
    <>
      <HeaderNoImage />
      <Card />
      <MaterialFooter />
    </>
  )
}

function Sistema() {
  return (
    <>
      <HeaderNoImage />
      <CardSistema />
      <MaterialFooter />
    </>
  )
}

function Codigo() {
  return (
    <>
      <HeaderNoImage />
      <CardCodigo />
      <MaterialFooter />
    </>
  );
}

export default App;