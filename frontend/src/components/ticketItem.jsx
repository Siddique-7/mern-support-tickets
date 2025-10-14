import React from 'react'
import { Link } from "react-router-dom"

function TicketItem({ ticket }) {
  // Map status to colors
  const statusColor = {
    new: 'bg-green-500 text-white',
    open: 'bg-blue-500 text-white',
    closed: 'bg-red-700 text-white',
  }

  return (
    <div className="grid grid-cols-4 gap-4 justify-between items-center bg-gray-100 p-4 rounded-md text-center mb-4">
      <div>{new Date(ticket.createdAt).toLocaleString('en-US')}</div>
      <div>{ticket.products}</div>
      <div className={`px-4 py-1 rounded-lg ${statusColor[ticket.status]}`}>
        {ticket.status}
      </div>
      <Link
        to={`/ticket/${ticket._id}`}
        className="px-3 py-1 border border-black rounded-md bg-white text-black text-sm hover:scale-95 flex justify-center items-center"
      >
        View
      </Link>
    </div>
  )
}

export default TicketItem
