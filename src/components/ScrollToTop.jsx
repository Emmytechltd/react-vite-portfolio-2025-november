import React, { useEffect, useState } from 'react'
import { FaChevronUp } from 'react-icons/fa'

export default function ScrollToTop(){
  const [show, setShow] = useState(false)
  useEffect(()=>{
    const onScroll = ()=> setShow(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])

  if(!show) return null
  return (
    <button onClick={()=>window.scrollTo({top:0, behavior:'smooth'})} className="fixed bottom-6 right-6 bg-brand text-black p-3 rounded-full shadow-lg">
      <FaChevronUp />
    </button>
  )
}
