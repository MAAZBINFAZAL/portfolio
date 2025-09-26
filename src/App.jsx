import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-4">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <footer className="py-8 text-center text-gray-400">© {new Date().getFullYear()} Maaz Bin Fazal</footer>
      </div>
    </div>
  )
}
