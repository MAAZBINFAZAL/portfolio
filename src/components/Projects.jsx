import React from 'react'
import hack from '../assets/hackathon-banner.png'
import banner from '../assets/banner.png'

const projects = [
  {
    title: 'Fruit Quality Detection (FYP)',
    desc: 'YOLOv8-based real-time fruit quality detection & conveyor sorting (90%+ mAP).',
    img: banner,
    repo: 'https://github.com/MAAZBINFAZAL/fyp-fruit-quality-detection',
    demo: 'https://drive.google.com/file/d/1l7DIGvR88hxMoFmObeTmAsxi1EJdHD1i/view?usp=drivesdk'
  },
  {
    title: 'Roblox Styler Agent (ETH Global)',
    desc: 'AI-powered outfit generator integrated with Coral Protocol & Mistral AI.',
    img: hack,
    repo: 'https://github.com/MAAZBINFAZAL/roblox-styler-agent',
    demo: 'https://lablab.ai/event/internet-of-agents/roblox-marketplace-ai/roblox-marketplace-agent'
  },
  {
    title: 'PLC Industrial Automation',
    desc: 'Siemens & Fatek PLC projects (water tank, motor control, traffic signal).',
    img: banner,
    repo: 'https://github.com/MAAZBINFAZAL/plc-industrial-automation',
    demo: 'https://drive.google.com/file/d/1rznTFA4-DYqmqUUi61ngAX1QEqGN94sH/view?usp=sharing'
  },
  {
    title: 'Vending Machine (Verilog)',
    desc: 'Verilog FSM for vending machine synthesized to Spartan XC400.',
    img: banner,
    repo: 'https://github.com/MAAZBINFAZAL/vending-machine-verilog',
    demo: 'https://drive.google.com/file/d/1MUcOKalmxKPxUX2KSLzeLqE8pO48Oo1t/view?usp=sharing'
  },
  {
    title: 'Student Performance Predictor',
    desc: 'ML model with web demo for early detection of at-risk students.',
    img: banner,
    repo: 'https://github.com/MAAZBINFAZAL/student-performance-predictor',
    demo: 'https://ai-gpa-predictor.onrender.com/'
  }
]

export default function Projects(){
  return (
    <section id="projects" className="py-12">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(p => (
          <div key={p.title} className="bg-gray-800 rounded overflow-hidden">
            <img src={p.img} alt={p.title} className="w-full h-44 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="text-gray-300 mt-2">{p.desc}</p>
              <div className="mt-4 flex gap-2">
                <a href={p.repo} target="_blank" rel="noreferrer" className="px-3 py-1 bg-indigo-600 rounded">Code</a>
                {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="px-3 py-1 border rounded">Demo</a>}
              </div>
            </div>
          </div>
        ))}
      </div>
      <img src="/src/assets/divider.gif" alt="" className="w-full mt-6" />
    </section>
  )
}
