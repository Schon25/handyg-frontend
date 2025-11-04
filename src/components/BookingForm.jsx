import React, {useState} from 'react'
import axios from 'axios'

export default function BookingForm(){
  const [form, setForm] = useState({name:'', phone:'', service:'', address:'', date:''})
  const [status, setStatus] = useState(null)

  const submit = async (e)=>{
    e.preventDefault()
    try{
      const res = await axios.post(import.meta.env.VITE_API_URL ? `${import.meta.env.VITE_API_URL}/api/jobs` : 'http://localhost:4000/api/jobs', form)
      setStatus('Booking submitted — a HandyG will contact you')
      setForm({name:'', phone:'', service:'', address:'', date:''})
    }catch(err){
      console.error(err)
      setStatus('There was an error submitting, try again')
    }
  }

  return (
    <form className="space-y-3 max-w-lg" onSubmit={submit}>
      <input required value={form.name} onChange={e=>setForm({...form, name:e.target.value})} placeholder="Full name" className="w-full p-2 border rounded" />
      <input required value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} placeholder="Phone number" className="w-full p-2 border rounded" />
      <input required value={form.service} onChange={e=>setForm({...form, service:e.target.value})} placeholder="Service required (e.g. plumbing)" className="w-full p-2 border rounded" />
      <input value={form.address} onChange={e=>setForm({...form, address:e.target.value})} placeholder="Address" className="w-full p-2 border rounded" />
      <input value={form.date} onChange={e=>setForm({...form, date:e.target.value})} type="date" className="w-full p-2 border rounded" />
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Submit Booking</button>
      {status && <p className="text-sm text-gray-700">{status}</p>}
    </form>
  )
}
