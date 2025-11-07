import React from 'react'

const items = [
  {id:1, text: 'Fantastic delivery and attention to detail. Our conversion improved 23%!', name: 'Aisha Bello', company: 'Lagos Retail'},
  {id:2, text: 'Top-tier development and great communication.', name: 'John Smith', company: 'Startup Co.'},
  {id:3, text: 'Creative and reliable — highly recommended.', name: 'Mary Ade', company: 'Creative House'}
]

export default function Testimonials(){
  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold">Testimonials</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map(it => (
          <div key={it.id} className="p-4 rounded-lg glass">
            <p className="text-gray-300">“{it.text}”</p>
            <div className="mt-3 text-sm text-gray-400">— {it.name}, {it.company}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
