import React from 'react'
import {useParams}from 'react-router-dom'

export default function WorkerProfile(){
  const {id} = useParams()
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold">Worker Profile (#{id})</h2>
      <p className="text-sm text-gray-600">This page will show worker details, ratings, completed jobs and contact button.</p>
    </div>
  )
}
