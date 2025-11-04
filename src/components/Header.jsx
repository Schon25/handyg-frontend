import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
  return (
    <header className="bg-white shadow">
      <div className="max-w-5xl mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="font-bold text-xl">HandyG Namibia</Link>
        <nav className="space-x-4">
          <Link to="/" className="text-sm">Home</Link>
          <Link to="/book" className="text-sm">Book a Job</Link>
          <Link to="/dashboard" className="text-sm">Dashboard</Link>
        </nav>
      </div>
    </header>
  )
}
