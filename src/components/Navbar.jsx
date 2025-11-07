import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle'

const links = [
  'home','about','skills','projects','services','blog','contact'
]

export default function Navbar({theme,setTheme}){
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed w-full z-40 bg-transparent">
      <nav className="backdrop-blur glass border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <a href="#home" className="text-2xl font-bold text-brand">Emmytech</a>
            <span className="text-sm text-gray-400 hidden md:inline">Digital Solutions</span>
          </div>

          <ul className={`md:flex items-center gap-6 ${open? 'block' : 'hidden'}`}>
            {links.map(l => (
              <li key={l}><a className="hover:text-brand capitalize" href={`#${l}`.toLowerCase()} onClick={()=>setOpen(false)}>{l}</a></li>
            ))}
            <li><ThemeToggle theme={theme} setTheme={setTheme} /></li>
          </ul>

          <div className="md:hidden">
            <button aria-label="menu" onClick={()=>setOpen(!open)} className="p-2 rounded-md">
              {open? <FiX size={22}/> : <FiMenu size={22}/>} 
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
