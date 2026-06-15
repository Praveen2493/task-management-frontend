import React from 'react'

const StatusBadge = ({status}) => {

const colors = {
  Pending:"bg-gray-100 text-gray-700",
  "In progress":"bg-blue-100 text-blue-700",
  Completed:"bg-green-100 text-green-700",
}

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${colors[status]}`}>{status}</span>
  )
}

export default StatusBadge;
