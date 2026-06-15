import React from 'react'

const StatsCard = ({
    title,
    count,
    bgcolor,
}) => {
  return (
    <div className={`${bgcolor} text-white rounded-xl shadow-md p-6`}>
        <h3 className='text-lg font-medium'>{title}</h3>
        <h2 className='text-3xl font-bold mt-2'>{count}</h2>
    </div>
  )
}

export default StatsCard;
