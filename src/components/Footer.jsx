import React from 'react'

export default function Footer(){
  return (
    <footer className="mt-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
        <div className="text-sm">© {new Date().getFullYear()} — Emmytech Digital Solutions</div>
        <div className="flex gap-4 text-lg">
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
        </div>
      </div>
    </footer>
  )
}
