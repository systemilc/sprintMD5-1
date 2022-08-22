import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './assets/components/Header'
import Form from './assets/components/Form'
import GridProdutos from './assets/components/GridProdutos'
import Divisor from './assets/components/Dividor'

function App() {
 

  return ( 
  <div>
    <Header />
    <Form /> 
    <Divisor props="Teste" />
    <GridProdutos/>
   

   </div>)
}

export default App
