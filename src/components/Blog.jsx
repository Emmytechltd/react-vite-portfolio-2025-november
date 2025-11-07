import React from 'react'
import blogs from '../data/blogs'

export default function Blog(){
  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold">Latest Posts</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map(b => (
          <article key={b.id} className="rounded-lg overflow-hidden bg-gray-800 shadow">
            <div className="h-40 bg-gray-700 flex items-center justify-center text-gray-400">Image</div>
            <div className="p-4">
              <h3 className="font-semibold">{b.title}</h3>
              <p className="text-sm text-gray-300 mt-2">{b.excerpt}</p>
              <a href={b.slug} className="text-sm text-brand mt-3 inline-block">Read More</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
