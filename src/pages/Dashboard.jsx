import React from 'react'

export default function Dashboard(){
  return (
    <div>
      <h2 className="font-semibold mb-3">Admin / Dispatcher Dashboard</h2>
      <p className="text-sm text-gray-600">This is a minimal dashboard showing bookings, workers and quick actions.</p>
      <div className="mt-4 grid grid-cols-1 gap-3">
        <div className="bg-white p-4 rounded shadow">Bookings list (placeholder)</div>
        <div className="bg-white p-4 rounded shadow">Workers list (placeholder)</div>
      </div>
    </div>
  )
}
