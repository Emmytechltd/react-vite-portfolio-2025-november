import React from 'react'
import { FaReact, FaNodeJs, FaWordpress } from 'react-icons/fa'
import { SiTailwindcss, SiFigma, SiGit } from 'react-icons/si'

const skills = [
  {name: 'React.js', icon: <FaReact className="text-cyan-400"/>, level: 90},
  {name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400"/>, level: 88},
  {name: 'Node.js', icon: <FaNodeJs className="text-green-400"/>, level: 75},
  {name: 'WordPress', icon: <FaWordpress className="text-blue-400"/>, level: 70},
  {name: 'Git', icon: <SiGit className="text-orange-400"/>, level: 85},
  {name: 'Figma', icon: <SiFigma className="text-pink-400"/>, level: 80}
]

export default function Skills(){
  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold">Skills</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {skills.map(s => (
          <div key={s.name} className="p-4 rounded-lg glass">
            <div className="flex items-center gap-4">
              <div className="text-2xl">{s.icon}</div>
              <div>
                <div className="font-semibold">{s.name}</div>
                <div className="text-sm text-gray-400">{s.level}%</div>
              </div>
            </div>
            <div className="mt-3 h-2 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-2 bg-brand" style={{width: `${s.level}%`}}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
