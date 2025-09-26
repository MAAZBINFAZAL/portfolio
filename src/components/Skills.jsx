import React from 'react'

const groups = [
  { title: 'AI / ML', items: ['YOLOv8','PyTorch','NumPy','OpenCV','Scikit-learn'] },
  { title: 'Frontend', items: ['HTML','CSS','JavaScript'] },
  { title: 'Backend', items: ['Node.js','Flask'] },
  { title: 'Languages', items: ['Python','C++','VHDL','Verilog'] },
  { title: 'Tools', items: ['Git','LaTeX','MATLAB','Arduino IDE','CoppeliaSim','PLC'] }
]

export default function Skills(){
  return (
    <section id="skills" className="py-12">
      <h2 className="text-2xl font-bold mb-4">⚙️ Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {groups.map(g => (
          <div key={g.title} className="bg-gray-800 p-4 rounded">
            <h3 className="font-semibold mb-2">{g.title}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map(i => <span key={i} className="text-sm bg-gray-700 px-3 py-1 rounded">{i}</span>)}
            </div>
          </div>
        ))}
      </div>
      <img src="/src/assets/divider.gif" alt="" className="w-full mt-6" />
    </section>
  )
}
