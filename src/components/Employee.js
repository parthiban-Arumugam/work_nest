import React from 'react';
import AddEmployee from './AddEmployee';

const Employee = ({ employees, setEmp, addEmp }) => {
  return (
    <div className="p-4 " >
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Employee List</h1>
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
            </tr>
          </thead>
          <tbody>
            {employees.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-500">
                  No employees found.
                </td>
              </tr>
            ) : (
              employees.map((emp) => (
                <tr key={emp.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3">{emp.id}</td>
                  <td className="px-4 py-3">{emp.name}</td>
                  <td className="px-4 py-3">{emp.email}</td>
                  <td className="px-4 py-3">{emp.designation}</td>
                  <td className="px-2 py-2">{emp.department}</td>
                  <td className="px-4 py-3">{emp.salary}</td>
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
