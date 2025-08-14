import React, { useState } from 'react';
import api from "../api/EmployeeDb";

const AddEmployee = ({ fetchEmp }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    designation: '',
    department: '',
    salary: '',
    skills: [] // Store skills as array of {name: "skillName"}
  });

  const [skillInput, setSkillInput] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddSkill = () => {
    if (skillInput.trim() === '') return;
    setFormData((prev) => ({
      ...prev,
      skills: [...prev.skills, { name: skillInput.trim() }]
    }));
    setSkillInput('');
  };

  const handleRemoveSkill = (index) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('', formData);
      fetchEmp();
      if (response.status === 201 || response.status === 200) {
        alert('Employee added successfully!');
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
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

        {/* Skills Input */}
        <div>
          <label className="block mb-1">Skills</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              className="flex-1 p-2 border rounded"
              placeholder="Enter a skill"
            />
            <button
              type="button"
              onClick={handleAddSkill}
              className="px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Add
            </button>
          </div>

          {/* Skills List */}
          <div className="flex flex-wrap gap-2 mt-2">
            {formData.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-100 px-2 py-1 rounded-full text-sm flex items-center gap-2"
              >
                {skill.name}
                <button
                  type="button"
                  onClick={() => handleRemoveSkill(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-4 bg-gray-800 text-white py-2 rounded hover:bg-gray-700"
        >
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
