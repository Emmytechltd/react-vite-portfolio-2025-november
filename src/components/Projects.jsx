import React from 'react'
import projects from '../data/projects'

export default function Projects(){
  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold">Projects</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(p => (
          <div key={p.id} className="rounded-xl overflow-hidden bg-gray-800 shadow-lg">
            <div className="h-40 bg-gray-700 flex items-center justify-center text-gray-400">Screenshot</div>
            <div className="p-4">
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-sm text-gray-300 mt-2">{p.desc}</p>
              <div className="mt-3 flex items-center gap-2 flex-wrap">
                {p.tags.map(t => (<span key={t} className="text-xs bg-gray-800 px-2 py-1 rounded">{t}</span>))}
              </div>
              <div className="mt-4 flex gap-3">
                <a className="text-sm text-brand" href={p.live}>Live Demo</a>
                <a className="text-sm text-gray-400" href={p.repo}>GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
