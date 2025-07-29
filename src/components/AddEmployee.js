import React, { useState } from 'react'
import api from "../api/EmployeeDb"

const AddEmployee = ({fetchEmp}) => {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    designation: '',
    department: '',
    salary: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
        const response = await api.post('',formData)
        fetchEmp();
         if (response.status === 201 || response.status === 200) {
            alert('Employee added successfully!');
            
    }

  }catch(err){
        console.log(err.message)
    }
};
  return (
<>
    
  <div className="max-w-md mx-4 p-5 border rounded-lg shadow">
      <h2 className="text-xl text-gray-800 font-semibold mb-4 text-center">Add New Employee</h2>
      <form onSubmit={handleSubmit} className="space-y-4 text-base font-semibold text-gray-800 text-xs">
        <div>
          <label className="block mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter full name"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="example@gmail.com"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Designation</label>
          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Ex: Software Developer"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Department</label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Ex: IT"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Salary</label>
          <input
            type="number"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter salary"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full mt-4 bg-gray-800 text-white py-2 rounded hover:bg-gray-700"
        >
          Add Employee
        </button>
      </form>
    </div>

</>
)
}

export default AddEmployee