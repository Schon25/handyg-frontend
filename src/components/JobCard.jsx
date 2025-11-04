import React from 'react'
import { Link } from 'react-router-dom'

export default function JobCard({job}){
  return (
    <div className="bg-white p-4 shadow rounded">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold">{job.title}</h3>
          <p className="text-sm text-gray-500">{job.description}</p>
        </div>
        <div className="text-right">
          <div className="font-bold">N${job.price}</div>
          <Link to={`/worker/${job.workerId}`} className="block text-xs mt-2 text-blue-600">View worker</Link>
        </div>
      </div>
    </div>
  )
}
