import { useState } from 'react'
import React, { useRef, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import About from './pages/About';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <>
      <Navbar refs={{ homeRef, aboutRef, projectsRef }} />
      <div className="scroll-container">
        <div ref={homeRef}><Home /></div>
        <div ref={projectsRef}><Projects /></div>
        <div ref={aboutRef}><About /></div>
      </div >
    </>
  )
}

export default App
