import React from 'react'
import { FiDownload, FiMapPin } from 'react-icons/fi'

export default function About(){
  return (
    <section className="py-16">
      <div className="grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-1 flex justify-center">
          <img src="https://i.pravatar.cc/300" alt="profile" className="w-56 h-56 rounded-xl object-cover shadow-lg" />
        </div>

        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="mt-4 text-gray-300">I’m Onu Emeka, a  developer with {new Date().getFullYear() - 2018}+ years of experience building responsive, accessible, and performance-focused web applications. I enjoy turning designs into polished user experiences and solving hard problems with simple solutions.</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/resume.pdf" className="btn btn-primary"><FiDownload/> Download CV</a>
            <div className="flex items-center gap-2 text-gray-300 px-3 py-2 glass rounded-md"><FiMapPin/> Lagos, Nigeria</div>
          </div>
        </div>
      </div>
    </section>
  )
}
