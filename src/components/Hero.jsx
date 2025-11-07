import React from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <div className="min-h-[80vh] flex items-center" style={{paddingTop: '4rem'}}>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{duration:0.6}}>
          <h1 className="text-4xl md:text-5xl font-extrabold">Hi, I'm Emmytech</h1>
          <p className="mt-4 text-lg text-gray-300">Web Developer • UI/UX Enthusiast • Tech Innovator</p>
          <div className="mt-6 flex gap-4">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn border border-gray-700">Contact Me</a>
          </div>
        </motion.div>

        <motion.div className="hidden md:flex justify-center" initial={{scale:0.9}} animate={{scale:1}} transition={{duration:0.6}}>
          <div className="w-64 h-64 rounded-xl bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 flex items-center justify-center shadow-lg">
            <span className="text-sm text-gray-400">Animated avatar / illustration</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
