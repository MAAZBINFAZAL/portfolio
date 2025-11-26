import React from 'react'
import { Download } from "lucide-react";   // 📄 icon
import profile from '../assets/profile.jpg'
import divider from '../assets/divider.gif'

export default function Hero() {
  return (
    <section className="flex flex-col items-center py-16">
      {/* Profile Photo */}
      <img
        src={profile}
        alt="Maaz"
        className="w-40 h-40 rounded-full border-4 border-indigo-500 object-cover shadow-lg"
      />

      {/* Name + Tagline */}
      <h1 className="text-4xl font-bold mt-6">Maaz Bin Fazal</h1>
      <p className="mt-2 text-xl text-gray-300 text-center">
        Software & Electronics Engineer | PHD Aspirant
      </p>

      {/* Buttons - All Indigo, Equal Style */}
      <div className="mt-6 grid grid-cols-3 gap-3 w-full max-w-lg">
        <a
          href="#projects"
          className="flex justify-center items-center gap-2 px-4 py-3 rounded bg-indigo-600 text-white font-medium
                     transition transform hover:bg-indigo-500 hover:scale-105 active:scale-95
                     hover:shadow-[0_0_15px_rgba(99,102,241,0.7)]"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="flex justify-center items-center gap-2 px-4 py-3 rounded bg-indigo-600 text-white font-medium
                     transition transform hover:bg-indigo-500 hover:scale-105 active:scale-95
                     hover:shadow-[0_0_15px_rgba(99,102,241,0.7)]"
        >
          Contact
        </a>
        <a
          href="/portfolio/cv/maaz_bin_fazal_cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center gap-2 px-4 py-3 rounded bg-indigo-600 text-white font-medium
                     transition transform hover:bg-indigo-500 hover:scale-105 active:scale-95
                     hover:shadow-[0_0_15px_rgba(99,102,241,0.7)]"
        >
          <Download size={18} /> Download CV
        </a>
      </div>

      {/* Divider */}
      <img src={divider} alt="divider" className="mt-8 w-full max-w-2xl" />
    </section>
  )
}
