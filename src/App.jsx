import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


// Components
import Header from './components/Header' 
import AboutMe from './components/AboutMe'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <AboutMe></AboutMe>

    </div>
  )
}

export default App
