'use client'
import Navbar from "../app/navbar"
import "../app/globals.css"
import Services from "../app/services"
import About from "../app/aboutus"
import Contact from "../app/contact"
export default function Home() {
  return (
    <main className="font-Playwrite">
      <div>
        <Navbar/>
        <h1 className="header">
          Perfection in Every Project
        </h1>
      </div>
      <About/>
      <Services/>
      <Contact/>
    </main>  
  );
}
