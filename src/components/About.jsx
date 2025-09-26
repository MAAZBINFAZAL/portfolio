import React from 'react'
import divider from '../assets/divider.gif'

export default function About(){
  return (
    <section id="about" className="py-12">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <p className="text-gray-300 mb-4">
        I am a Software & Electronics Engineer passionate about building intelligent embedded systems, computer vision pipelines,
        and AI-powered applications. With hands-on experience in YOLO-based fruit quality detection, PLC automation, and robotics,
        I am seeking opportunities in generative AI, LLMs, and microcontroller-based innovations.
      </p>

      <ul className="list-disc ml-6 text-gray-300 space-y-2">
        <li>Scored 120/160 in Duolingo English Test (IELTS 6.5 equivalent)</li>
        <li>Selected as Team Leader in academic projects</li>
        <li>Awarded state merit scholarship</li>
        <li>Led 50+ volunteers to prepare 500+ underprivileged students</li>
        <li>YOLO optimization research (paper under IEEE review)</li>
      </ul>

      <img src={divider} alt="" className="w-full mt-6" />
    </section>
  )
}
