import React from 'react'

const Header = () => {
  return (
    <div className="bg-white shadow-md h-16 flex items-center justify-between px-6 ml-64">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <button className="text-red-600 font-medium hover:underline">Logout</button>
    </div>
  )
}

export default Header