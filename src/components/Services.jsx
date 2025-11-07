import React from 'react'
import { FiMonitor, FiShoppingCart, FiTrendingUp, FiLifeBuoy } from 'react-icons/fi'

const services = [
  {title: 'Web Design & Development', icon: <FiMonitor/>, desc: 'Responsive websites, SPA, and progressive web apps.'},
  {title: 'E-commerce Solutions', icon: <FiShoppingCart/>, desc: 'Shopify, WooCommerce and custom cart experiences.'},
  {title: 'SEO & Digital Marketing', icon: <FiTrendingUp/>, desc: 'Technical SEO, performance and conversion optimization.'},
  {title: 'Tech Consultation', icon: <FiLifeBuoy/>, desc: 'Product & architecture advisory for startups and teams.'}
]

export default function Services(){
  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold">Services</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map(s => (
          <div key={s.title} className="p-6 rounded-xl glass hover:scale-[1.02] transition-transform shadow">
            <div className="text-3xl text-brand mb-3">{s.icon}</div>
            <h3 className="font-semibold">{s.title}</h3>
            <p className="mt-2 text-gray-300 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
