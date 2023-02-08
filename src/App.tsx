import { useState } from 'react'
import reactLogo from './assets/react.svg'
import First from './components/First'
import Footer from './components/Footer'
import { Navbar } from './components/Navbar'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Home/>
  )
}

export default App
