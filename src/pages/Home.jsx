import React, {useEffect, useState} from 'react'
import axios from 'axios'
import JobCard from '../components/JobCard'

export default function Home(){
  const [jobs, setJobs] = useState([])
  useEffect(()=>{
    const url = import.meta.env.VITE_API_URL ? `${import.meta.env.VITE_API_URL}/api/jobs` : 'http://localhost:4000/api/jobs'
    axios.get(url).then(r=>setJobs(r.data)).catch((e)=>{console.error(e); setJobs([])})
  },[])

  return (
    <div className="space-y-6">
      <section className="bg-gradient-to-r from-green-100 to-white p-6 rounded">
        <h1 className="text-2xl font-bold">HandyG — Find trusted handymen near you</h1>
        <p className="text-sm text-gray-600">Book plumbers, electricians, cleaners and more with verified workers and transparent pricing.</p>
      </section>

      <section>
        <h2 className="font-semibold mb-3">Available Jobs / Sample Services</h2>
        <div className="grid grid-cols-1 gap-3">
          {jobs.length ? jobs.map(j=> <JobCard key={j.id} job={j}/>) : <p className="text-sm text-gray-500">No sample jobs found. Start by adding bookings.</p>}
        </div>
      </section>

      <section>
        <h2 className="font-semibold mb-3">Book a Service</h2>
        <div className="bg-white p-4 rounded shadow"><a href="/book" className="text-blue-600">Go to booking form</a></div>
      </section>
    </div>
  )
}
