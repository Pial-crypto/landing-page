import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Courses from './components/Courses'

function App() {
  

  return (
    <>
    <header className="hero-wrap grid-bg">
    <Navbar></Navbar>
    <Hero></Hero>
    </header>
    <main>
      <Logos></Logos>
      <Courses></Courses>
    
    </main>
    </>
  )
}

export default App
