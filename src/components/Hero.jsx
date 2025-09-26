import React from 'react'
import profile from '../assets/profile.jpg'

export default function Hero(){
  return (
    <section className="flex flex-col items-center py-16">
      <img src={profile} alt="Maaz" className="w-40 h-40 rounded-full border-4 border-indigo-500 object-cover" />
      <h1 className="text-4xl font-bold mt-6">Maaz Bin Fazal</h1>
      <p className="mt-2 text-xl text-gray-300">Software & Electronics Engineer • Embedded AI • Robotics • Computer Vision</p>
      <div className="mt-4 flex gap-3">
        <a href="#projects" className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-500">View Projects</a>
        <a href="#contact" className="px-4 py-2 border border-indigo-600 rounded hover:bg-indigo-700">Contact</a>
      </div>
    </section>
  )
}
