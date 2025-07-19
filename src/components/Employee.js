import React, { useState } from 'react';
import AddEmployee from './AddEmployee';
import { Link } from 'react-router-dom';
import api from "../api/EmployeeDb"

const Employee = ({ employees, setEmp, addEmp, fetchEmp }) => {

  const [search, setSearch] = useState('');

  const filteredEmployees = employees.filter((emp) =>
  emp.name.toLowerCase().includes(search.toLowerCase())

);
const handleDelete = async (id) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this employee?");
  if (!confirmDelete) return;

  try {
    await api.delete(`/${id}`);
    await fetchEmp();
    
  } catch (err) {
    console.error('Delete failed:', err);
  }
};


  return (
    <div className="p-4 text-xs " >
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Employee List</h1>
      </div>
      <div className='mb-4'>
      <input type="text"
             value={search}
             placeholder='search'
             onChange={(e)=> setSearch(e.target.value)} 
             className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
 />
      </div>

      {addEmp && <AddEmployee setEmp={setEmp} />}

      <div className="right-0 overflow-x-auto bg-white rounded-lg shadow mt-4">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-3 py-2">ID</th>
              <th className="px-3 py-2">Name</th>
              <th className="px-3 py-2">Email</th>
              <th className="px-3 py-2">Designation</th>
              <th className="px-3 py-2">Department</th>
              <th className="px-3 py-2">Salary</th>
              <th className="px-3 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-500">
                  No employees found.
                </td>
              </tr>
            ) : (
              filteredEmployees.map((emp) => (
                <tr key={emp.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3">{emp.id}</td>
                  <td className="px-4 py-3">{emp.name}</td>
                  <td className="px-4 py-3">{emp.email}</td>
                  <td className="px-4 py-3">{emp.designation}</td>
                  <td className="px-2 py-2">{emp.department}</td>
                  <td className="px-4 py-3">{emp.salary}</td>
                  <td className="px-4 py-3 flex gap-2">
                    <Link to={`/edit/${emp.id}`} className="text-blue-600 hover:underline">Edit</Link>
                    <button
                      onClick={() => handleDelete(emp.id)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employee;
