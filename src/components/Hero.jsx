import React from 'react'
import profile from '../assets/profile.jpg'
import divider from '../assets/divider.gif'

export default function Hero() {
  return (
    <section className="flex flex-col items-center pt-16 pb-4">

      {/* Profile Photo */}
      <img
        src={profile}
        alt="Maaz"
        className="w-40 h-40 rounded-full border-4 border-indigo-500 object-cover shadow-lg"
      />

      {/* Name */}
      <h1 className="text-4xl font-bold mt-6">Maaz Bin Fazal</h1>

      {/* Tagline */}
      <p className="mt-2 text-xl text-gray-300 text-center">
        Software & Electronics Engineer | Research Enthusiast | 
      </p>

      {/* Button + Scroll Indicator Row */}
      <div className="mt-6 flex items-center gap-4 w-full max-w-lg">

        {/* Book a Meeting */}
        <a
          href="https://calendly.com/engr-maazbinfazal-ee/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex justify-center items-center px-4 py-3 rounded bg-indigo-600 text-white font-medium
                     transition transform hover:bg-indigo-500 hover:scale-105 active:scale-95
                     hover:shadow-[0_0_15px_rgba(99,102,241,0.7)]"
        >
          Book a Meeting
        </a>

        {/* Scroll Indicator (Right Side) */}
        <a
          href="#projects"
          className="flex flex-col items-center group"
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center items-start p-1 group-hover:border-white transition">
            <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce group-hover:bg-white"></div>
          </div>
        </a>

      </div>

      {/* Divider */}
      <img src={divider} alt="divider" className="mt-4 w-full max-w-2xl" />
    </section>
  )
}