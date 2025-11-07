import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'

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

        <div className="p-4 rounded-lg glass">
          <h3 className="font-semibold">Business Contact</h3>
          <p className="text-sm text-gray-300 mt-2">Phone: +234 800 000 0000</p>
          <p className="text-sm text-gray-300">Email: hello@emmytech.com</p>
          <p className="text-sm text-gray-300 mt-2">Address: Lagos, Nigeria</p>
          <div className="mt-4 flex gap-3 text-2xl">
            <a href="#" aria-label="LinkedIn">LI</a>
            <a href="#" aria-label="GitHub">GH</a>
            <a href="#" aria-label="Twitter">TW</a>
          </div>
        </div>
      </div>
    </section>
  )
}
