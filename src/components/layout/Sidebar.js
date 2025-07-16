import React from 'react'
import { Link } from 'react-router-dom';
const sidebar = () => {
  return (
     <div className="w-64 h-screen bg-gray-800 text-white p-4 fixed">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <nav className="flex flex-col space-y-4">
        <Link to="/dashboard" className="hover:text-blue-300">Dashboard</Link>
        <Link to="/employees" className="hover:text-blue-300">Employee List</Link>
        <Link to="/add" className="hover:text-blue-300">Add Employee</Link>
      </nav>
    </div>
  )
}

export default sidebar