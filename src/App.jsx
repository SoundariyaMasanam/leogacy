import React from "react";
import './App.css'
import Navbar from './components/Navbar'
import Analytics from './components/Analytics'
import Cards from './components/Cards'
import Hero from './components/Hero'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import GetStarted from "./components/GetStarted";
import Download from "./components/Download";
import Copywrite from "./components/Copywrite";
import Sample from "./components/Sample";
function App() {
  return (
    <div>
  <Navbar />
  <Hero />
  <Cards />
  <GetStarted />
  <Download />
  <Analytics />
<Sample />
  <Newsletter />
  <Footer />
  <Copywrite />
    </div>
  )
}

export default App
