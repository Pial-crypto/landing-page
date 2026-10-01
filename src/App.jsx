import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  

  return (
    <>
    <header className="hero-wrap grid-bg"></header>
    <Navbar></Navbar>
    <Hero></Hero>
    </>
  )
}

export default App
