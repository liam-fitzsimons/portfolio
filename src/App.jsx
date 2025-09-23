import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="scroll-container">
        <Home />
        <About />
        <Projects />
      </div>
    </>
  )
}

export default App
