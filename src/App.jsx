import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Courses from './components/Courses'
import Categories from './components/Categories'
import Growth from './components/Growth'
import Creator from './components/Creator'
import CtaBanner from './components/CtaBanner'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

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
      <Categories></Categories>
      <Growth></Growth>
      <Creator></Creator>
      <CtaBanner></CtaBanner>
    <Testimonials></Testimonials>
  
    </main>
      <Footer></Footer>
    </>
  )
}

export default App
