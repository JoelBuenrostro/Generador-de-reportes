import React from 'react'

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

//Componentes
import Header from './components/Header'
import User from './components/User'
import Data from './components/Data'

function App() {
  return (
    <>
      <Header />
      <User />
      <Data />
    </>
  )
}

export default App;