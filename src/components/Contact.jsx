import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import { FaWhatsapp } from 'react-icons/fa'

export default function Contact(){
  const formRef = useRef()
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // You must set these environment variables or replace with your EmailJS IDs
    const SERVICE_ID = process.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id'
    const TEMPLATE_ID = process.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id'
    const USER_ID = process.env.VITE_EMAILJS_USER_ID || 'your_user_id'

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID)
      .then(()=>{
        setSent(true)
        formRef.current.reset()
      }).catch(err => {
        console.error('EmailJS error', err)
      })
  }

  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold">Contact</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <input name="from_name" placeholder="Name" className="w-full p-3 rounded bg-gray-800" required />
          <input name="reply_to" type="email" placeholder="Email" className="w-full p-3 rounded bg-gray-800" required />
          <textarea name="message" placeholder="Message" className="w-full p-3 rounded bg-gray-800" rows={6} required />
          <button type="submit" className="btn btn-primary">Send Message</button>
          {sent && <div className="text-sm text-green-400">Message sent — thank you!</div>}
        </form>

        <div className="p-4 rounded-lg glass relative">
          <h3 className="font-semibold">Business Contact</h3>
          <p className="text-sm text-gray-300 mt-2">Phone: +234 7067797360</p>
          <p className="text-sm text-gray-300">Email: emmybasil@gmail.com</p>
          <p className="text-sm text-gray-300 mt-2">Address: Lagos, Lekki Nigeria</p>

          {/* WhatsApp link using wa.me; number must be in international format without + or dashes */}
          <p className="mt-3">
            <a
              href={`https://wa.me/2347067797360?text=${encodeURIComponent('Hello! I saw your portfolio and would like to get in touch.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 bg-green-600 hover:bg-green-700 rounded text-white"
              aria-label="Chat on WhatsApp"
            >
              <FaWhatsapp />
              Chat on WhatsApp
            </a>
          </p>

          <div className="mt-4 flex gap-3 text-2xl">
            <a href="https://www.linkedin.com/in/onu-emmanuel-73a83613b/" aria-label="LinkedIn">LinkedIn</a>
            <a href="https://github.com/Emmytechltd" aria-label="GitHub">GitHub</a>
            <a href="https://x.com/emmxdon" aria-label="Twitter">X</a>
          </div>
        </div>
      </div>
      {/* Floating WhatsApp button */}
      <a
        href={`https://wa.me/2347067797360?text=${encodeURIComponent('Hello! I saw your portfolio and would like to get in touch.')}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 p-3 rounded-full shadow-lg text-white z-50 flex items-center justify-center"
      >
        <FaWhatsapp />
      </a>
    </section>
  )
}
