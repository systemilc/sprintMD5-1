import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './assets/components/Header'
import Form from './assets/components/Form'

function App() {
  const [count, setCount] = useState(0)

  return ( 
  <div>
    <Header />
    <Form />
    
   </div>)
}

export default App
