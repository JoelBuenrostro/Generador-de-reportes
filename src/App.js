import React from 'react'

//MDB5
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

//Componentes
import Header from './components/Header'
import User from './components/User'
import Table from './components/Table'
import SubmitButton from './components/SubmitButton'
import MaterialFooter from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <User />
      <Table />
      <SubmitButton />
      <MaterialFooter />
    </>
  )
}

export default App;