import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from "../api/EmployeeDb";
import { MdDeleteSweep, MdEdit, MdRemoveRedEye } from "react-icons/md";

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
    <div className="p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Employees</h1>
       
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          value={search}
          placeholder="Search employees..."
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEmployees.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">No employees found.</p>
        ) : (
          filteredEmployees.map((emp) => (
            <div key={emp.id} className="bg-white rounded-lg shadow p-5 hover:shadow-lg transition">
              {/* Profile Section */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-lg font-bold">
                  {emp.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h2 className="text-lg font-semibold">{emp.name}</h2>
                  <p className="text-gray-500">{emp.designation}</p>
                </div>
              </div>

              {/* Skills */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {emp.skills?.length > 0 ? (
                    emp.skills.map((skill) => (
                      <span
                        key={skill.id}
                        className="px-2 py-1 bg-gray-100 text-sm rounded-full"
                      >
                        {skill.name}
                      </span>
                    ))
                  ) : (
                    <span className="text-gray-400 text-sm">No skills added</span>
                  )}
                </div>

              {/* Task Completion */}
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-1">
                  Task Completion: <span className="font-semibold">{emp.taskCompletion || 0}%</span>
                </p>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${emp.taskCompletion || 0}%` }}
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-between gap-2">
                <button className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                  <MdRemoveRedEye /> View
                </button>
                <Link
                  to={`/edit/${emp.id}`}
                  className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
                >
                  <MdEdit /> Edit
                </Link>
                <button
                  onClick={() => handleDelete(emp.id)}
                  className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
                >
                  <MdDeleteSweep /> Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Employee;
