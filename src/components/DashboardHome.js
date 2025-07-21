import React from 'react';

const DashboardHome = ({ employees }) => {
  const totalEmployees = employees.length;
  const departments = new Set(employees.map(emp => emp.department));
  const averageSalary =
    totalEmployees > 0
      ? employees.reduce((sum, emp) => sum + Number(emp.salary), 0) / totalEmployees
      : 0;

  return (
    <>
    <h1 className='text-gray-800 text-xl font-bold'>WorkLens</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow text-center">
        <h2 className="text-sm font-semibold text-gray-800">Total Employees</h2>
        <p className="text-2xl font-bold text-purple-600">{totalEmployees}</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow text-center">
        <h2 className="text-sm font-semibold text-gray-800">Departments</h2>
        <p className="text-2xl font-bold text-purple-600">{departments.size}</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow text-center">
        <h2 className="text-sm font-semibold text-gray-800">Average Salary</h2>
        <p className="text-2xl font-bold text-purple-600">₹{averageSalary.toFixed(2)}</p>
      </div>
    </div>
    </>
  );
};

export default DashboardHome;
